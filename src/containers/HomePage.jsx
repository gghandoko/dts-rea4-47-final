import React from "react";
import { Box, Button, Divider, InputBase, Paper, Typography } from "@mui/material";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import UpcomingMovie from "../components/UpcomingMovie";
import useMovieStore, {
    selectAllMovies,
    selectFetchAllMovies,
    selectfetchSelectedMovie,
    selectFetchTopRatedMovie,
    selectFetchUpcomingMovies,
    selectSelectedMovie,
    selectTopRatedMovie,
    selectUpcomingMovies
} from "../stores/movieStoreZustand";
import { useState } from "react";
// selectfetchSelectedMovie
// selectSelectedMovie
// OutlinedInput
// Paper, InputBase, IconButton, 
// Search
// useState
const HomePage = () => {
    const fetchAllMovies = useMovieStore(selectFetchAllMovies);
    const getAllMovies = useMovieStore(selectAllMovies);
    // const fetchLatesttMovies = useMovieStore(selectFetchLatestMovie);
    // const getLatestMovies = useMovieStore(selectLatestMovies);
    const selectedMovieUser = useMovieStore(selectfetchSelectedMovie)
    const getSelectedMovie = useMovieStore(selectSelectedMovie)

    const fetchTopRatedMovie = useMovieStore(selectFetchTopRatedMovie);
    const getTopRatedMovie = useMovieStore(selectTopRatedMovie);

    const fetchupcomingMovies = useMovieStore(selectFetchUpcomingMovies);
    const getUpcomingMovies = useMovieStore(selectUpcomingMovies);
    const baseUrl = "https://image.tmdb.org/t/p/w200"
    const baseUrlSec = "https://image.tmdb.org/t/p/w1280"

    const [queryStrings, setQueryStrings] = useState("")
    const navigate = useNavigate()


    
    const searchOnchangeHandler = (event) => {
        setQueryStrings(event.target.value)
        // setQueryStrings("")
    }
    const fnKeyHandle = (event) => {
        // console.log("eneter")
        if (event.key === "Enter") {

            // console.log("eneter")
            navigate(`/search/${queryStrings}`)
        }

    }
    useEffect(
        () => {
            fetchupcomingMovies()
            fetchAllMovies()
            selectedMovieUser("718930")
            fetchTopRatedMovie()

            
        },
        []

    )

    return (
        <>
            <Box sx={{
                backgroundImage: `url(${baseUrlSec}${getSelectedMovie.backdrop_path})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "80vh",
                opacity:"50%",
                // backgroundColor: "blueviolet",
            }}
            >
                <Box sx={{
                    height: "20vh"
                }}>

                </Box>
                <Box sx={{
                    marginLeft: "20px",
                }}>

                    <Typography variant="h1" sx={{ color: "white" }} >Welcome</Typography>
                    <Typography variant="h3" sx={{ color: "white" }}>Millions of movies, TV shows and people to discover. Explore now.</Typography>
                    {/* <Button onClick={handleOpen}>Watch Trailer</Button> */}
                </Box>
                <Box sx={{
                    marginLeft: "20px",
                    marginRight: "20px",
                }}>
                    <Paper
                        // component="form"
                        fullwidth
                        sx={{
                            p: '2px 4px', display: 'flex', alignItems: 'center',
                            borderRadius: 5    }}
                    >
                        
                        <InputBase
                            sx={{ ml: 1, flex: 1, borderRadius:5 }}
                            
                            placeholder="Search Movie, people etc"
                            inputProps={{ 'aria-label': 'Search Movie, people etc' }}
                            value={queryStrings}
                            onChange={searchOnchangeHandler}
                            onKeyDown={fnKeyHandle}
                        />
                      
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <Link to={`/search/${queryStrings}`}>  
                            <Button sx={{borderRadius:5}} variant="contained">Search</Button>
                        </Link>
                    </Paper>
                    
                </Box>
               
                <Box sx={{
                    marginLeft: "20px",
                }}>
                    
                </Box>




            </Box>
            <Divider />

            <Box sx={{marginLeft:"20px", marginTop:"20px", borderBottom:"grey"}}>
                <Typography variant="h4">What's Popular</Typography>
            </Box>
            <Box sx={{ marginTop: "0px" }}>
           
            <div >
                <Box
                    sx={{
                        overflow: 'auto',
                        display: 'flex',
                        my: 2,
                        p: 1,
                            // marginRight: "20px",
                            marginLeft: "20px",
                        bgcolor: (theme) =>
                            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        border: '1px solid',
                        borderColor: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                        borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: '700',
                    }}
                >
                
                        {getAllMovies.map(movie => (
                   
                            <Box sx={{}}>
                               
                                <div style={{ textAlign: "center" }}>
                                    <Link to={`/detail/${movie.id}`}>
                                        <img src={`${baseUrl}${movie.poster_path}`} />
                                        {/* <Typography>{movie.title}</Typography> */}
                                    </Link>
                                    </div>
                               
                            </Box>
                        ))}

                </Box>

            </div>
           
               
            </Box>
            <Box sx={{ marginLeft: "20px", marginTop: "20px" }}>
                <Typography variant="h4">Top Rateds</Typography>
            </Box>
            <div >
                <Box
                    sx={{
                        overflow: 'auto',
                        display: 'flex',
                        // height:"320px",
                        my: 2,
                        p: 1,
                        // marginRight: "20px",
                        marginLeft: "20px",
                        bgcolor: (theme) =>
                            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        border: '1px solid',
                        borderColor: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                        borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        // marginBottom:"10px"
                    }}
                >
                    {/* <ul> */}
                    {getTopRatedMovie.map(top => (

                        <Box sx={{}}>

                            <div style={{ textAlign: "center" }}>
                                <Link to={`/detail/${top.id}`}>
                                    <img src={`${baseUrl}${top.poster_path}`} />
                                    {/* <Typography>{movie.title}</Typography> */}
                                </Link>
                            </div>

                        </Box>
                    ))}
                    {/* </ul> */}
                </Box>

            </div>
            <Box sx={{ marginLeft: "20px", marginTop: "20px" }}>
                <Typography variant="h4">Upcoming Movies</Typography>
            </Box>
            <UpcomingMovie getUpcomingMovies={getUpcomingMovies} />

            <Box
            sx={{ backgroundColor:"whitesmoke", marginTop:"20px", textAlign:"center"}}>
                <Typography >---DTS REA4-47-FINAL--</Typography>
                <Typography>GGMADZ</Typography>
            </Box>
        </>
    )
}

export default HomePage;