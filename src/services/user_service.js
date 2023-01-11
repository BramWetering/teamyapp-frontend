import axios from "axios";
import { protectedResources } from "../authConfig";

const url = protectedResources.apiUser.endpoint;

//const url = "http://localhost:5000/user/";

export async function getAllActivities(token) {
    var response = await axios.get(url + "active", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }

  export async function getUser(token) {
    var response = await axios.get(url + "me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
  
  export async function checkUser(token) {
    var response = await axios.get(url + "login/check", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }