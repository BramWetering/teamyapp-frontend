import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Signin from './components/Login/Sigin';
import { useIsAuthenticated } from "@azure/msal-react";
import { PageLogin } from "./components/Login/Login";

import Home from "./components/Home/Home";
import Layout from './components/Layout/Layout';
import Profile from './components/Login/Profile';
import NotFound from './components/NotFound/NotFound';

function App() {
  const ProtectedRoute = ({ children }) => {
    if (!useIsAuthenticated()) {
      // return <Navigate to="/login" />;
      return <Layout><PageLogin /></Layout>;
    }

    return children;
  };

  const token = localStorage.getItem('accessToken');

  // if(!token) {
  //   return <Signin />
  // }



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/teamyapp/home' element={
          <ProtectedRoute>
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
        }
        />
        <Route path='/teamyapp/profile' element={
          <ProtectedRoute>
            <Layout>
              <Profile />
            </Layout>
          </ProtectedRoute>
        }
        />
        <Route path="*" element={
          <Layout>
            <NotFound />
          </Layout>
        }
        />
      </Routes>
    </BrowserRouter>
    
    // <div className="wrapper">
    //   <BrowserRouter>
    //     <Routes>
    //     <Route path="/login" element={<PageLogin />} />
        

    //     <Route element={<WithNav />}>
    //       <Route path="/" element={<Navigate to="/profile" />} />
    //       <Route
    //         path="/profile"
    //         element={
    //           <ProtectedRoute>
    //             <Home />
    //           </ProtectedRoute>
    //         }
    //       />
    //     </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;