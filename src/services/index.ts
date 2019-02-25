import {Users} from "../data/entity/users.entity";
import {Sites} from "../data/entity/sites.entity";
import {Devices} from "../data/entity/devices.entity";
import {AlarmZones} from "../data/entity/alarm-zones.entity";
import {StorageTypes} from "../data/entity/storage-types.entity";
import {Storage} from "../data/entity/storages.entity";
import {Connection, Repository} from "typeorm";
import {FormDevicesBySiteIdDto, GetDevicesBySiteIdDto} from "./dto/get-devices-by-site-id.dto";

export class Service {
  private alarmZoneRep: Repository<AlarmZones>;
  private userRep: Repository<Users>;
  private siteRep: Repository<Sites>;
  private devicesRep: Repository<Devices>;
  private storageTypesRep: Repository<StorageTypes>;
  private storageRep: Repository<Storage>;

  constructor(repository: Connection){
    this.userRep = repository.getRepository(Users);
    this.siteRep = repository.getRepository(Sites);
    this.alarmZoneRep = repository.getRepository(AlarmZones);
    this.devicesRep = repository.getRepository(Devices);
    this.storageTypesRep = repository.getRepository(StorageTypes);
    this.storageRep = repository.getRepository(Storage);
  }

  async getUserList(): Promise<{id: number, username: string}[]>{
    return (await this.userRep.find()).map( ({id, username}) => ({id, username}))
  }

  async getSiteList(): Promise<{id: number, title: string}[]>{
    return (await this.siteRep.find()).map( ({id, title}) => ({id, title}))
  }

  async getAlarmZonesBySiteId(siteId: number): Promise<{id: number, armed: boolean, name: string}[]>{
    const res = await this.alarmZoneRep.find({siteId});
    return res.map((item) => {
      return {id: item.id, armed: item.armed, name: item.name}
    });
  }

  async getDevicesBySiteId(siteId: number): Promise<GetDevicesBySiteIdDto[]> {
    const devices = await this.devicesRep
      .createQueryBuilder("device")
      .where('device.siteId = :siteId', {siteId})
      .leftJoinAndSelect("device.storages", "storage")
        .leftJoinAndSelect('storage.type', 'type', '', {type: 'type'})
      .getMany();
      return devices.map( device => FormDevicesBySiteIdDto(device));
  }
}
