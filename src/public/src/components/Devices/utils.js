import axios from "axios";
import {SERVER_ENDPOINT} from "../../constans";

export async function devicesLoader(siteId) {
  const {data} = await axios.get(SERVER_ENDPOINT + '/sites/'+ siteId +'/devices');
  if (data && Array.isArray(data)){
    return data;
  }
  return false;
}
