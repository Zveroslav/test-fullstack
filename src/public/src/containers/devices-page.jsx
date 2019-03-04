import {Devices} from "../components/Devices/index.jsx";
import connect from "react-redux/es/connect/connect";

export const DevicesPage = connect(
  state => ({
    stateRequest: state.stateRequest
  }),
  null
)(Devices);
