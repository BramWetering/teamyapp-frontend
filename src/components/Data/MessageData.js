import React from 'react'
import "./Data.css"
//import { timeAgo } from "../../Services/Time"

function MessageData(props) {
    return (
        <div className="messageData">
            <p>
                {props.data.message}<br />

            </p>
        </div>
    )
}

export default MessageData


//    < label title = { new Date(props.data.timestamp).toLocaleString() } >
 //       { timeAgo(props.data.timestamp) } ago
  //              </label >