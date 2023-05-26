import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { DashBoard } from '../pages/Dashboard'
import { ProtectedRoutes } from './protectedRoutes'

export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route element={<ProtectedRoutes />}>
               <Route path="/dashboard" element={<DashBoard/>} />
            </Route>
        </Routes>
    )
}