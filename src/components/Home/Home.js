import React, { useEffect, useState } from "react";
import { MockData_Userdescriptions, MockData_Generaldescriptions } from "../../MockData/Messages";
//import { MockData_Trends } from "../../MockData/Trends";
import { MockData_User } from "../../MockData/Users";
//import { timeAgo } from "../../Services/Time";
import MessageData from "../Data/MessageData";
import "./Home.css"
import { GetAllMessages, PostMessage } from "../../services/message_service";
import { loginRequest } from "../../authConfig";
import { useMsal } from "@azure/msal-react";



export default function Home() {
 
    const { instance, accounts } = useMsal();
    const [kweets, setKweets] = useState(MockData_Userdescriptions)
    //const [trends] = useState(MockData_Trends)
    const [user] = useState(MockData_User)
    const [ownKweets] = useState(MockData_Generaldescriptions)
    const lastKweet = ownKweets.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)[0]
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
            var accessToken = await getAccessToken();
            console.log(accessToken);
            await PostMessage(accessToken, messageText,messageTitle)
            var newMessageList = await GetAllMessages(accessToken)
            setKweets(newMessageList.reverse())
            document.getElementById('happening').value = ""
            document.getElementById('title').value = ""
        }
    }

    async function getAccessToken() {

        const request = {
            ...loginRequest,
            account: accounts[0]
        };
        var token = ""
        await instance.acquireTokenSilent(request)
            .then((response) => {
                token = response.accessToken
            })
        //const res = token.replace(/ /g, '')
        return token
    }

    useEffect(() => {
        getMessages()

        async function getMessages() {
            var accessToken = await getAccessToken2();
            var response = await GetAllMessages(accessToken)
            setMessageData(response)
        }

        
        // var accessToken = await getAccessToken2();

        // var response = await axios.get(url + "message/all", {
        //     headers: { Authorization: `Bearer ${accessToken}`,
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-Type': 'application/json', },
        // });
     
        // setMessageData(response.messageData);


        async function getAccessToken2() {

            const request = {
                ...loginRequest,
                account: accounts[0]
            };
            var token = ""
            await instance.acquireTokenSilent(request)
                .then((response) => {
                    token = response.accessToken
                })
            return token
        }

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