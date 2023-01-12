import React, { useEffect, useState } from "react";
//import { MockData_Userdescriptions, MockData_Generaldescriptions } from "../../MockData/Messages";
//import { MockData_Trends } from "../../MockData/Trends";
//import { MockData_User } from "../../MockData/Users";
//import { timeAgo } from "../../Services/Time";
//import MessageData from "../Data/MessageData";
//import "./Home.css"
import { GetAllMessages, PostMessage } from "../../services/message_service";
//import { loginRequest } from "../../authConfig";
import { useMsal } from "@azure/msal-react";



export default function Home() {
 
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJjMDc3NTk3ZC1hYTI0LTQ2YTctYWFlYy01OGNhZDdhYzRiNDYiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vM2I5NGI0YzYtNTlhNy00ZDRmLWI1OTQtNTMyZWFkYWZmNzg0L3YyLjAiLCJpYXQiOjE2NzM1MjA0MDQsIm5iZiI6MTY3MzUyMDQwNCwiZXhwIjoxNjczNTI2MDAwLCJhaW8iOiJBWlFBYS84VEFBQUEvazdhVXNENGlnNi8yRlBGOHN6NitvRDhGSm91Q2FxSzE1bERibjNUQzdrV1hqaHgyVmtYdmRzNTNJa2FPRzVXWDMrQWRtQWpBVXVZR0g1UUxuMG5ObjJrTzR0Y09KcDZqWE9URUN0bkRNSGJOdUpSTFlJYzFiVjVpZ2JzRHBPeEJuWm5iT3BFY0RlNmdWZTBjYmRvWWltMUk1Nk5TVjI1eUU0TTBqVEl1ajdoeHNNQ3BYYVprV3pwMVUzdndWcWIiLCJhenAiOiJjMDc3NTk3ZC1hYTI0LTQ2YTctYWFlYy01OGNhZDdhYzRiNDYiLCJhenBhY3IiOiIwIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzY2YjY3NjUtYjc5NC00YTJiLTg0ZWQtODQ1YjM0MWMwODZhLyIsIm5hbWUiOiJCcmFtIFdldGVyaW5nIiwib2lkIjoiMzI2ZDM0ODAtZTk5Ny00ZWI5LTk2MjEtMjBjMDcxMmJkOTViIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNDE0Mjk1QHN0dWRlbnQuZm9udHlzLm5sIiwicmgiOiIwLkFVNEF4clNVTzZkWlQwMjFsRk11cmFfM2hIMVpkOEFrcXFkR3F1eFl5dGVzUzBhREFCWS4iLCJzY3AiOiJVc2VyLkFsbCIsInN1YiI6IlNia3NXZkd2Smp6aVN3eF9PRWdkU0hfYkI4dzF1X3VRZF80czdNZE85S2MiLCJ0aWQiOiIzYjk0YjRjNi01OWE3LTRkNGYtYjU5NC01MzJlYWRhZmY3ODQiLCJ1dGkiOiJCUms4N19qa1QwcXJyNGtDRUNOR0FBIiwidmVyIjoiMi4wIn0.Hj7m_FLAyja17Cl1TB4OQI5LeN1zC0m4jjSgarUPp1fUtGjJ1md7cXOsrM2y-hv5ND8A2VsyBnTlHHMVEBuYYnV6bdteXzgZR7JdC2kjtHqDzmA2icorh3Cu7oMtXwbARxss9IwJVL7k6RBd1tieNU8u-Fc5ska3A5usxy67h98nSKA0sXqup2Wgvgq3HXNDLWHfqdtgJNI5PRO_HWNNuzD9Tk6Od91udqst1SvNKbNUdBnlHl2ET6xTc2n1vyjsNDsFmMBrgQtQpmGqN9qV_cah9XliTYmT2zIcKWwMnCqNaxMr-dAaqWnOIZiRioM7tspb-tqqsmV2RSnjtRqIsw";
    const { instance, accounts } = useMsal();
    //const [kweets, setKweets] = useState(MockData_Userdescriptions)
    //const [trends] = useState(MockData_Trends)
    //const [user] = useState(MockData_User)
    //const [ownKweets] = useState(MockData_Generaldescriptions)
    //const lastKweet = ownKweets.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)[0]
    const [messageText, setHappeningTest] = useState("")
    const [messageTitle, setMessageTitle] = useState("")
    const [messageData, setMessageData] =  useState([])

    const handleSubmit = async () => {
        if (messageText === "" || messageText === undefined) {
            alert(`Je moet eerst een bericht maken om te versturen`)
        }
        if (messageTitle === "" || messageTitle === undefined) {
            alert(`Je moet eerst een bericht maken om te versturen`)
        }
        else {
            //var accessToken = await getAccessToken();
            console.log(token);
            await PostMessage(token, messageText,messageTitle)
            //var newMessageList = await GetAllMessages(accessToken)
            //setKweets(newMessageList.reverse())
            document.getElementById('happening').value = ""
            document.getElementById('title').value = ""
        }
    }

    // async function getAccessToken() {

    //     const request = {
    //         ...loginRequest,
    //         account: accounts[0]
    //     };
    //    // var token = ""
    //     await instance.acquireTokenSilent(request)
    //         .then((response) => {
    //             token = response.accessToken
    //         })
    //     //const res = token.replace(/ /g, '')
    //     return token
    // }

    useEffect(() => {
        getMessages()

        async function getMessages() {
            //var accessToken = await getAccessToken2();
            var response = await GetAllMessages(token)
            //console.log(response);
            setMessageData(response)
        }

        
        // var accessToken = await getAccessToken2();

        // var response = await axios.get(url + "message/all", {
        //     headers: { Authorization: `Bearer ${accessToken}`,
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-Type': 'application/json', },
        // });
     
        // setMessageData(response.messageData);


        // async function getAccessToken2() {

        //     const request = {
        //         ...loginRequest,
        //         account: accounts[0]
        //     };
        //     //var token = ""
        //     await instance.acquireTokenSilent(request)
        //         .then((response) => {
        //             token = response.accessToken
        //         })
        //     return token
        // }

    }, [instance, accounts]);




    const arr = messageData.map((data,index)=>{
        return (
            
                    <tr>
                        {data.title}
                        <br/>
                        {data.description}
                    </tr>
              
        )
    })


    
  return (
  //make header and footer
  //get all messages from other people
  //make profile page
  //let user change profile page


    <div id="Container">
        
        <div className="first-block">

            <div className="Feed">
                Messages:
                <table>
                    <tbody>
                        {arr}
                    </tbody>
                </table>
                {/* {messageData.map(item => (
                    <p>{item.description}</p>
                    
                ))} */}

            </div>
        </div>

        <div id="second-block">
            <div id="post-message">
                <p>
                        Title <br />
                        <textarea id="title" onChange={e => setMessageTitle(e.target.value)} />
                        <br/>
                        Message
                        <br/>
                        <textarea id="happening" onChange={e => setHappeningTest(e.target.value)} />
                </p>
                    <button id="submit_happening" value={"submit"} onClick={handleSubmit}>Verstuur</button>
            </div>
        </div>

        
    </div >
  );
}