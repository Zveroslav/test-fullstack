import axios from "axios";
import {SERVER_ENDPOINT} from "../../../constans";

export async function getSitesRequest () {
  const {data} = await axios.get(SERVER_ENDPOINT + '/sites');
  if (data && Array.isArray(data)){
    return data;
  }
  return false;
}
