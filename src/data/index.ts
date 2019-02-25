import * as path from "path";
import { ConnectionOptions, createConnection } from "typeorm"
import {AlarmZones} from "./entity/alarm-zones.entity";
import {Devices} from "./entity/devices.entity";
import {Sites} from "./entity/sites.entity";
import {Storage} from "./entity/storages.entity";
import {StorageTypes} from "./entity/storage-types.entity";
import {Users} from "./entity/users.entity";


const options: ConnectionOptions = {
  type: "sqlite",
  database: path.resolve(__dirname, 'data.db'),
  entities: [AlarmZones, Devices, Sites, Storage, StorageTypes, Users],
  logging: true,
};

async function connection() {
  return await createConnection(options);
}

export default connection;
