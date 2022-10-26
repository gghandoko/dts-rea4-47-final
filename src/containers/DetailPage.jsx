import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useMovieStore, {
    selectfetchSelectedMovie,
    selectFetchTrailer,
    selectFetchUpcomingMovies,
    selectSelectedMovie,
    selectTrailerMovie,
    selectUpcomingMovies
} from "../stores/movieStoreZustand";


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';





const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height:400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const DetailPage = () => {
    let params = useParams()
    // console.log(params.movieId);

    const selectedMovieUser = useMovieStore(selectfetchSelectedMovie)
    const getSelectedMovie = useMovieStore(selectSelectedMovie)

    const selectTrailer = useMovieStore(selectFetchTrailer)
    const getTrailer = useMovieStore(selectTrailerMovie)
    const baseUrl = "https://image.tmdb.org/t/p/w1280"
    const baseUrlSec = "https://image.tmdb.org/t/p/w200"
    // const baseUrl = "https://image.tmdb.org/t/p/w200"



    const fetchupcomingMovies = useMovieStore(selectFetchUpcomingMovies);
    const getUpcomingMovies = useMovieStore(selectUpcomingMovies);

    // const videosKey = getTrailer[0]
    // const theKey = ""
   
    // console.log(videosKey.key)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    // console.log("isis selected mive")
    // console.log(getSelectedMovie)

    // console.log("isis similar moviee")
    // console.log(getSimilarMovie)
    useEffect(
        () => {
            selectedMovieUser(params.movieId);
            selectTrailer(params.movieId);
            fetchupcomingMovies()
            
        },
        [params]
    )
    
    let videoskey = ""
    let substr = "Off"
    let thestr =""
    for (let i = 0; i < getTrailer.length; i++){
        thestr = getTrailer[i].name
      
        
        if (thestr.includes(substr)) {
            
            videoskey = getTrailer[i].key
            // console.log(getTrailer[i].name)
            continue
        }
        else if(getTrailer[i].key != undefined) {
            videoskey = getTrailer[i].key
            continue
        }
    }
    
    return (
        <>
            <div>
            <Box sx={{
                backgroundImage: `url(${baseUrl}${getSelectedMovie.backdrop_path})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "100vh",
            }}
            > 
                <Box sx={{
                    height:"50vh"
                }}>

                </Box>
                <Box sx={{
                    marginLeft: "20px",
                    color:"whitesmoke"
                }}>
                    
                    <h1>{getSelectedMovie.title}</h1>
                    {/* <Button onClick={handleOpen}>Watch Trailer</Button> */}
                </Box>
                <Box sx={{
                    marginLeft: "20px",
                    }}>
                        
                            
                            
                            
                           
                        <Button variant="outlined" onClick={handleOpen} >WATCH </Button>
                            
                </Box>
                        {/* <a href={`https://www.youtube.com/watch?v=${videoskey}`}><button>Watch Trailer</button></a> */}
                <Box sx={{
                    marginLeft: "20px",
                    color: "whitesmoke"
                }}>
                        <Typography>{getSelectedMovie.overview}</Typography>
                        {/* <OutlinedInput /> */}
                </Box>  
                    
                
                
               
            </Box>
            
            </div>
            <div>
               
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{width:"100%"}}
                >
                    <Box sx={style}>
                        {videoskey ? (<iframe width="100%" height="100%"
                            src={`https://www.youtube.com/embed/${videoskey}`}>
                        </iframe>):(<p style={{textAlign:"center"}}>Opps! we dont find any trailer videos </p>)}
                          
                       
                    </Box>
                    
                </Modal>
            </div>
            <Box sx={{ marginLeft: "20px", marginTop: "20px" }}>
                <Typography variant="h4">Upcoming Movies</Typography>
            </Box>
           
            <div style={{marginTop:"20px", width:"100%"}}>
                <Box
                    component="div"
                    sx={{
                        overflow: 'auto',
                        display: 'flex',
                        my: 2,
                        p: 1,
                       
                        marginLeft: "20px",
                        
                        bgcolor: (theme) =>
                            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        border: '1px solid',
                        borderColor: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                       
                        fontSize: '0.875rem',
                        fontWeight: '700'
                        
                    }}
                >

                    {getUpcomingMovies.map(upcome => (

                        <Box >
                            <div style={{ textAlign: "center" }}>
                                <Link to={`/detail/${upcome.id}`}>
                                    <img src={`${baseUrlSec}${upcome.poster_path}`} />
                                    {/* <Typography>{ upcome.title}</Typography> */}
                                </Link>
                            </div>
                        </Box>

                    ))}

                </Box>

                
            </div>
            <Box
                sx={{ backgroundColor: "whitesmoke", marginTop: "20px", textAlign: "center" }}>
                <Typography >---DTS REA4-47-FINAL--</Typography>
                <Typography>GGMADZ</Typography>
            </Box>
            
            
        </>
    )
}

export default DetailPage;