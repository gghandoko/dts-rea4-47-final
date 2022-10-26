import React, { useEffect } from "react";
import { auth } from "../authentications/FirebaseAuth";
// import { useAuthState } from "react-firebase-hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";


const ProtectedComponent = ({children}) => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(
        () => {
          
            if (!user) {
                navigate("/login")
            }
            
        },
        [user, loading]

    )
    return loading ? <div><LinearProgress /></div>: children
    
}

export default ProtectedComponent;