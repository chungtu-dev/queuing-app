import React, { FC, useEffect } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Signup from './components/Signup-V2'
import Login from './components/Login';
import Dashboard from './components/Dashboard'

import Device from './components/Device'
import Profile from './components/Profile'
import Service from './components/Service'
import Setting from './components/Setting'

// import {getUserById} from './store/actions/authActions'
// import { getAuth, onAuthStateChanged } from "firebase/auth";

const App: FC = () => {

  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     try {
  //       if (user) {
  //         const res = async(uid: string) => {
  //           return await getUserById(uid)
  //         }
  //         console.log('user-info', user.providerData)
  //         return res
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  // },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />

        <Route path='/auth/profile' element={<Profile />} />
        <Route path='/admin/thiet-bi' element={<Device />} />
        <Route path='/admin/service' element={<Service />} />
        {/* <Route path='/admin/setting' element={<Setting />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
