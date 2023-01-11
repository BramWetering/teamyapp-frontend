import React from "react";
import "@vaadin/login/vaadin-login-form.js";
//import "./page-login.css";
import { MsalContext } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

export class PageLogin extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      callbackId: null,
      firstLogin: null,
    };
  }

  static contextType = MsalContext;

  render() {
    if (this.context.accounts.length > 0) {
      return (
        <div>
          <span>
            There are currently {this.context.accounts.length} users signed in!
          </span>
          <button onClick={() => this.context.instance.logout()}>Logout</button>
        </div>
      );
    } else {
      return (
        <div
          className="page flex flex-justify-center flex-items-center"
          id="page-login"
        >
          <div className="card flex flex-column">
            <div className="card-title flex flex-column">
              <h4>TeamyApp</h4>
              <p className="small">
                Deze app vereist login om toegang te krijgen. Log alstublieft
                eerst in.
              </p>
              <button
                className="login-button"
                onClick={() => this.context.instance.loginRedirect(loginRequest)}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
















// import React from 'react';

// export default function Login() {
//   return(
//     <div className="login-wrapper">
//         <h1>Please Log In</h1>
//         <form>
//         <label>
//             <p>Username</p>
//             <input type="text" />
//         </label>
//         <label>
//             <p>Password</p>
//             <input type="password" />
//         </label>
//         <div>
//             <button type="submit">Submit</button>
//         </div>
//         </form>
//     </div>
//   )
// }