import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Navigation from "./Navigation";

const UnprotectedRoute = ({children}) => {
       
    let {user} = useUserAuth()
    
      
    const navigate = useNavigate()

    setTimeout(() => {
        if(user) {
            return navigate("/home")     
        }
        return (
        <>
           {children} 
        </>
        )
    }, 0)

}

export default UnprotectedRoute