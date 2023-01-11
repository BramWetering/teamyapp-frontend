import React from 'react';
import "./Footer.css"
import {
    useIsAuthenticated, useMsal
} from '@azure/msal-react';

const Footer = () => {
    const { instance } = useMsal();

    function handleLogout() {
        instance.logoutRedirect();
    }

    return (
        <div className="footer">
            <p className="footer-text">
                {/* © Copyright {new Date().getFullYear()} | Kwetter | {useIsAuthenticated ? <button onClick={() => { handleLogout() }}>uitloggen</button> : ""} */}
            </p>
        </div>
    );
};

export default Footer;