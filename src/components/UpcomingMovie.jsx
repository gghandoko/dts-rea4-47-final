import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// Link

const UpcomingMovie = ({ getUpcomingMovies }) => {
    const baseUrl = "https://image.tmdb.org/t/p/w200"

    return (
        <>
            
            <div>
                <Box
                    component="div"
                    sx={{
                        overflow: 'auto',
                        display: 'flex',
                        my: 2,
                        p: 1,
                        // margin: "20px",
                        marginLeft: "20px",
                        // marginRight: "20px",
                        // marginBottom: "20px",
                        bgcolor: (theme) =>
                            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        border: '1px solid',
                        borderColor: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                        // borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: '700'
                        // marginBottom:"20px"
                    }}
                >

                    {getUpcomingMovies.map(upcome => (
                        <Box >
                            <div style={{ textAlign: "center" }}>
                                <Link to={`/detail/${upcome.id}`}>
                                    <img src={`${baseUrl}${upcome.poster_path}`}
                                        alt="no image"
                                    />
                                    {/* <Typography>{ upcome.title}</Typography> */}
                                </Link>
                            </div>
                        </Box>
                        

                    ))}

                </Box>
            </div>
        </>
    )
}

export default UpcomingMovie;