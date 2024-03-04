import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { Users } from '../components/Users';
import { ForgotPassword } from '../pages/ForgotPassword';

export const Allroutes = () => {
  return (
   <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/employee_details" element={<Users/>}/>
      <Route path="/forgot_password" element={<ForgotPassword/>}/>
   </Routes>
  )
}
