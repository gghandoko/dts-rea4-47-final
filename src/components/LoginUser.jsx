import { Box, Button, TextField, Typography } from "@mui/material";
// import { margin, maxHeight, maxWidth, width } from "@mui/system";
// import { makeSyles } from "@mui/styles";
// import makeStyles from '@mui/styles/makeStyles';

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, signinUserWithEmailPass, signinUserWithGoogle } from "../authentications/FirebaseAuth";

// makeStyles, Paper

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1
//     },
//     paper: {
//         padding: theme.spacing(2),
//         margin: "auto",
//         maxWidth: 500
//     },
//     outerColumn: {
//         borderRight: "1px solid grey",
//         borderBottom: "1px solid grey",
//         borderLeft: "1px solid grey",
//         height: 100
//     },
//     centerColumn: {
//         borderBottom: "1px solid grey",
//         height: 100
//     }
// }));


const LoginUser = () => {
    // const classes = useStyles();
    const [user, isLoading, error] = useAuthState(auth)
    const navigate = useNavigate()

    const [email, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const fnFormUserName = (event) => {
        setUserName(event.target.value);
    }

    const fnFormPassword = (event) => {
        setPassword(event.target.value);
    }

    const fnSubmitUser = () => {
        console.log(email)
        console.log(password)
        signinUserWithEmailPass(email, password)
        

    }

    const fnLoginGoogle = () => {
        signinUserWithGoogle()
    }
   

    useEffect(
        () => {
            if (user) {
                navigate("/")
            }
        },
        [user]
    )
    return (
        <>
            
           <div style={{height:"100vh"}}>

                <Box
                    sx={{
                        display: 'flex',
                        // flexDirection:"column",
                        justifyContent: 'center',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        marginTop:"80px"
                        // maxWidth:"200px",
                    }}
                >
                <div style={{ maxWidth: "400px", justifyContent: 'center' }}>
                    <Typography variant="h5" sx={{
                        textAlign: "center",
                        marginBottom :"20px"
                    }}> Login
                        </Typography>
                        <TextField
                        sx={{
                            textAlign: "center",
                            marginBottom: "10px"
                        }}
                            label="Username"
                            id="outlined-size-small12"
                            // defaultValue="Smalfdsfl"
                            size="small"
                            value={email}
                            onChange={fnFormUserName}
                            fullWidth

                        />
                    <TextField
                        sx={{
                            textAlign: "center",
                            marginBottom: "10px"
                        }}
                            label="password"
                            id="outlined-size-small-y"
                            // defaultValue="password"
                            size="small"
                            value={password}
                            onChange={fnFormPassword}
                            fullWidth
                            type="password"
                            
                        />
                    <Button
                        sx={{
                            textAlign: "center",
                            marginBottom: "10px"
                        }}
                        variant="outlined"
                        fullWidth
                        onClick={fnSubmitUser}>Login</Button>

                    <Button
                        sx={{
                            textAlign: "center",
                            marginBottom: "10px"
                        }}
                        variant="outlined"
                        fullWidth
                        onClick={fnLoginGoogle}>
                        Login with Google
                    </Button>
                        <Link to="/register">
                            <Typography sx={{ textAlign: "center" }} > Don't Have Account ? Register Here</Typography>
                        </Link>
                       
                    </div>
                </Box>

            </div>
       </>
    )
}

export default LoginUser;