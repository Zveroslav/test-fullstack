import axios from "axios";
import {SERVER_ENDPOINT} from "../../constans";

export async function alarmZonesLoader(siteId) {
  const {data} = await axios.get(SERVER_ENDPOINT + '/sites/'+ siteId +'/alarmzones');
  if (data && Array.isArray(data)){
    return data;
  }
  return false;
}
