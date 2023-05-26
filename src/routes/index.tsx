import { Route, Routes } from 'react-router-dom'

export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path="/" />
            <Route path="/dashboard" />
        </Routes>
    )
}