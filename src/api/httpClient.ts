import axios from "axios";
import { JSON_SERVER_URL } from "./constants";

const client = axios.create();

client.defaults.baseURL = JSON_SERVER_URL;
client.defaults.headers.common["Accept"] = "application/json";

export { client };
