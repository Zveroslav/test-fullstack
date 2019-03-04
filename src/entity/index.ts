import * as path from "path";
import { ConnectionOptions, createConnection } from "typeorm"
import {AlarmZones} from "./alarm-zones.entity";
import {Devices} from "./devices.entity";
import {Sites} from "./sites.entity";
import {Storage} from "./storages.entity";
import {StorageTypes} from "./storage-types.entity";
import {Users} from "./users.entity";
import {DB_URL} from "../constans";


const options: ConnectionOptions = {
  type: "sqlite",
  database: path.resolve(__dirname, DB_URL),
  entities: [AlarmZones, Devices, Sites, Storage, StorageTypes, Users],
  logging: true,
};

async function connection() {
  return await createConnection(options);
}

export default connection;
