import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { Logout} from '@mui/icons-material';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";



import { Button, Divider, Grid, List, Paper} from '@mui/material';
import { logout } from '../authentications/FirebaseAuth';
import HomeOutlined from '@mui/icons-material/HomeOutlined';

// Link
// Grid,List, Avatar, ListItem, ListItemAvatar, FolderSpecialRounded, ListItemText
// Link
// Paper, Divider, Button
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export default function SearchAppBar({ children }) {
    const [queryStrings, setQueryStrings] = useState("")
    const [counter, setCounter] = useState("")
    const navigate = useNavigate()
    
    const fnSetCounter = () => {
        setCounter("New counter")
    }
    console.log("counter")
    console.log(counter)
    const searchOnchangeHandler = (event) => {
        setQueryStrings(event.target.value)
        
        
    }

    const fnKeyHandle = (event) => {
        // console.log("eneter")
        if (event.key === "Enter") {

            // console.log("eneter")
            navigate(`/search/${queryStrings}`)
        }
        
    }

  
    console.log(queryStrings);

    const logoutUser = () => {
        logout()
        
    }
    const fnHome = () => {
        navigate("/")
    }
    const fnSetClear = () => {
        setQueryStrings("")
        setCounter("")
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        
                        <HomeOutlined onClick={fnHome} />
                        
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Movies
                    </Typography>
                    <Search fullWidth >
                        <SearchIconWrapper>
                            
                        </SearchIconWrapper>
                         {/* <StyledInputBase
                            // placeholder="Search…"
                            // inputProps={{ 'aria-label': 'search' }}
                            // value={queryStrings}
                            // onChange={searchOnchangeHandler}
                            // onKeyPress={searchOnchangeHandler}
                        />  */}
                    </Search>
                    <IconButton sx={{ color: 'white' }}>
                        {counter ? (<CloseIcon onClick={fnSetClear} />) : (<SearchIcon onClick={fnSetCounter} />)}
                        
                    </IconButton>
                    
                    <IconButton>
                        <Logout sx={{ color:'white'}} onClick={logoutUser} />
                    </IconButton>
                </Toolbar>
                
               
                
            </AppBar>
            {counter ? (
                
                <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    {/* <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Avatar with text
                    </Typography> */}
                    
                        <List fullWidth sx={{marginLeft:"20px", marginRight:"20px"}} >
                            <Paper
                                // component="form"
                                fullwidth
                                sx={{
                                    p: '2px 4px', display: 'flex', alignItems: 'center',
                                    borderRadius: 5
                                }}
                            >

                                <InputBase
                                    sx={{ ml: 1, flex: 1, borderRadius: 5 }}

                                    placeholder="Search Movie, people etc"
                                    inputProps={{ 'aria-label': 'Search Movie, people etc' }}
                                    value={queryStrings}
                                    onChange={searchOnchangeHandler}
                                    onKeyDown={fnKeyHandle}
                                />

                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                <Link to={`/search/${queryStrings}`} sx={{ textDecoration:"none"}}>
                                    <Button sx={{ borderRadius: 5, textDecoration:"none" }} variant="contained" onClick={fnSetClear}>Search</Button>
                                </Link>
                            </Paper>
                            
                        
                                  
                        </List>
                       
                    </Grid>
                    
            </Grid> ) : ""}
            
            {children}
        </Box>
    );
}
