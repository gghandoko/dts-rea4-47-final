import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useMovieStore, { selectFetchSearchMovie, selectSearchMovie } from "../stores/movieStoreZustand";
// Box
// Card, CardMedia,CardContent, Typography
// Link
const SearchMovie = () => {
    let params = useParams()
    console.log(params.queryStr)
    // let params = useParams()
    // console.log(params.movieId);

    const searchedMovie = useMovieStore(selectFetchSearchMovie);
    const getSearchedMovie = useMovieStore(selectSearchMovie);
    const baseUrl = "https://image.tmdb.org/t/p/w200"

    useEffect(
        () => {
            searchedMovie(params.queryStr)
        },
        [params]
    )
    return (
        <>
            <Box sx={{ margin: "20px", textAlign: "center" }}>
                {getSearchedMovie ?
                    (<Typography variant="h4" >
                    Results for "{params.queryStr}"
                    </Typography>) :
                    (<Typography variant="h4" >
                        Looks we don't find your movie
                    </Typography>
                        
                )}
                
            </Box>
            <Box sx={{ flexGrow: 1, alignItems: "center", maxWidth:"100%"}}>
                {getSearchedMovie.map(searched => (
                    
                    <Card fullwidth sx={{margin:"20px"}}>
                        <Grid container spacing={2} >
                        
                            <Grid item xs={4}>
                                <Link to={`/detail/${searched.id}`}>
                                <CardMedia
                                    component="img"
                                    alt=""
                                    height="300"
                                        image={`${baseUrl}/${searched.poster_path}`}
                                    />
                                </Link>
                            </Grid>
                        
                            <Grid item xs={8}>
                                <CardContent>
                                    <Link to={`/detail/${searched.id}`}> 
                                        <Typography gutterBottom variant="h5" component="div">
                                            {searched.title}
                                        </Typography>
                                    </Link>
                                    <Typography variant="body2" color="text.secondary">
                                        {searched.release_date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {searched.overview}
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>

                    </Card>
                    ))
                } 
                {/* <p>{ getSearchedMovie.results.id}</p> */}
                
            </Box>
            <Box
                sx={{ backgroundColor: "whitesmoke", marginTop: "20px", textAlign: "center" }}>
                <Typography >---DTS REA4-47-FINAL--</Typography>
                <Typography>GGMADZ</Typography>
            </Box>
        </>
    )
}

export default SearchMovie;