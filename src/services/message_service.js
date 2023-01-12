import axios from "axios";
//import { protectedResources } from "../authConfig";

const url = "http://159.223.240.117/";

// export async function GetdefaultMessage(token) {
//     var response = await axios.get(url + "message/", {
//         headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
// }

// export async function PostMessage(token, message) {
//     var response = await axios.post(url + "message/new",
//         {
//             "userId": "2ee2958c-ace5-48a5-b6cf-b653f45fc756",
//             "username": "Frontend user",
//             "message": message,
//         },
//         {
//             headers: { Authorization: `Bearer ${token}` },
//         }
//     )
//     return response.data;
// }

export async function GetAllMessages(token) {
    var response = await axios.get(url + "message/all", {
        headers: { Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json', },
    });
    return response.data;
}

export async function PostMessage(token,messageText,messageTitle) {
    var response = await axios.post(url + "message/add", 
    {
        "title": messageTitle,
        "description": messageText
    },
    {
        headers: { Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json', },
    });
    return response.data;
}