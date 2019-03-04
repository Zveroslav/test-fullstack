import {Devices} from "../../entity/devices.entity";

export interface GetDevicesBySiteIdDto {
  id: number,
  alarmZoneId: number,
  title: string,
  model: string,
  connected: boolean,
  storages: DeviceStorage[]
}

interface DeviceStorage {
  id: number,
  type: string,
  state: string
}

export const FormDevicesBySiteIdDto = (device: Devices): GetDevicesBySiteIdDto => ({
    ...device,
    connected: +device.connected === 1,
    storages: device.storages.map(
      item => ({
        ...item,
        type: item.type.type
      })
    )
});
