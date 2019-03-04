import {connect} from "react-redux";
import {SitesView} from "../components/Sites/SitesView";

export const Sites = connect(
  state => ({
    stateRequest: state.stateRequest,
    user: state.user,
  }),
  null
)(SitesView);
