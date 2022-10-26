import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserWithEmailPass } from "../authentications/FirebaseAuth";






const Register = () => {
    const [email, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const fnFormUserName = (event) => {
        setUserName(event.target.value);
    }

    const fnFormPassword = (event) => {
        setPassword(event.target.value);
    }

    const fnSubmitUser = (event) => {
        event.preventDefault()
        console.log(email)
        console.log(password)
        registerUserWithEmailPass(email, password)
        navigate("/login")

    }
    return (
        <>

           
            <div style={{ height: "100vh" }}>

                <Box
                    sx={{
                        display: 'flex',
                        // flexDirection:"column",
                        justifyContent: 'center',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        marginTop: "80px"
                        // maxWidth:"200px",
                    }}
                >
                    <div style={{ maxWidth: "400px", justifyContent: 'center' }}>
                        <Typography variant="h5" sx={{
                            textAlign: "center",
                            marginBottom: "20px"
                        }}> Form Register
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
                            required
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
                            required
                            fullWidth

                        />
                        <Button
                            sx={{
                                textAlign: "center",
                                marginBottom: "10px"
                            }}
                            variant="outlined"
                            fullWidth
                            onClick={fnSubmitUser}>Register </Button>

                        {/* <Button
                            sx={{
                                textAlign: "center",
                                marginBottom: "10px"
                            }}
                            variant="outlined"
                            fullWidth
                            onClick={fnLoginGoogle}>
                            Login with Google
                        </Button> */}
                        {/* <Link to="/register">
                            <Typography sx={{ textAlign: "center" }} > Don't Have Account ? Register Here</Typography>
                        </Link> */}

                    </div>
                </Box>

            </div>
        </>
    )
}

export default Register;