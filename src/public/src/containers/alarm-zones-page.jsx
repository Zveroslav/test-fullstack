import {AlarmZones} from "../components/AlarmZones";
import connect from "react-redux/es/connect/connect";

export const AlarmZonesPage = connect(
  state => ({
    deviceList: state.alarmZoneList,
    stateRequest: state.stateRequest
  }),
  dispatch => ({
    loadAlarmZoneListBySiteId(siteId) {
      dispatch(alarmZoneBySiteId(siteId))
    },
  })
)(AlarmZones);
