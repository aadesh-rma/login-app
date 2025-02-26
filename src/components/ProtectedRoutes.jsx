import { Navigate } from "react-router-dom";


export default function ProtectedRoutes({isAuthenticated,children}){
    console.log("pro is rendering")
    console.log("isAuthenticated:",isAuthenticated)
   return(
    (isAuthenticated)? children : <Navigate to="/" replace /> 
   ) 
}