import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne} from "typeorm"
import {Devices} from "./devices.entity";
import {StorageTypes} from "./storage-types.entity";

@Entity("storages")
export class Storage {
  @PrimaryGeneratedColumn({ name: "id" })
  id!: number;

  @JoinColumn({name: 'type_id'})
  @OneToOne(type => StorageTypes, storageType => storageType.type)
  type!: StorageTypes;

  @Column({ name: "state" })
  state!: string;

  @JoinColumn({name: 'device_id'})
  @ManyToOne(type => Devices,  device =>  device.storages)
  device!: Devices;
}

