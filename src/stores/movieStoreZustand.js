// import { async } from "@firebase/util";
import axios from "axios";
import create from "zustand";


//slice
    //state
    //actionns
//hooks
//selector
//export
const key_api = "b7ebb3dc284fe3abe3efb65a412f0f90"
const baseUrl = "https://api.themoviedb.org/3/movie/"

const SliceMovie = (set) => ({
    movies: [],
    selectedMovie: [],
    // similarMovie: [],
    trailerMovie:[],
    searchMovie: [],
    topRatedMovie:[],
    // latestMovies: [],
    upcomingMovies:[],
    
    

    fetchAllMovie: async () => {
        try {
            const { data } = await axios.get(`${baseUrl}popular?api_key=${key_api}`)
            // const { data } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=b7ebb3dc284fe3abe3efb65a412f0f90")
            set({movies:data.results})
        } catch (error) {
            console.log(error)
            
        }
    },

    fetchTopRatedMovie: async () => {
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key_api}&language=en-US&page=1`)
            set({topRatedMovie:data.results})
        } catch (error) {
            console.log(error)
        }
    },

    // fetchLatestMovie: async () => {
    //     try {
    //         const { data } = await axios.get(`${baseUrl}latest?api_key=${key_api}`);
    //         set({latestMovies:data.results})
    //     } catch (error) {
    //         console.log(error)
    //     }
    // },

    fecthUpcomingMovie: async () => {
        try {
            const { data } = await axios.get(`${baseUrl}upcoming?api_key=${key_api}`);
            set({upcomingMovies:data.results})
        } catch (error) {
            console.log(error)
            
        }
    },

    fetchSelectedMovie: async (id) => {
        try {
            
            const { data } = await axios.get(`${baseUrl}${id}?api_key=${key_api}`)
            // console.log(data)
            set({ selectedMovie:data });
        } catch (error) {
            console.log(error)
        }
    },

    fetchTrailerMovie: async (id) => {
        try {

            const { data } = await axios.get(`${baseUrl}${id}/videos?api_key=${key_api}`)
            // console.log(data)
            set({trailerMovie:data.results});
        } catch (error) {
            console.log(error)
        }
    },

    fetchSearchMovie: async (queryStr) => {
        try {
            console.log(queryStr)
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b7ebb3dc284fe3abe3efb65a412f0f90&page=1&query=${queryStr}`)
            console.log(data)
            set({searchMovie:data.results})
        } catch (error) {
            console.log(error)
        }
    }

    
    
})

const useMovieStore = create(SliceMovie)

export const selectFetchAllMovies = (state) => state.fetchAllMovie;
export const selectAllMovies = (state) => state.movies;

export const selectFetchLatestMovie = (state) => state.fetchLatestMovie;
export const selectLatestMovies = (state) => state.selectLatestMovies;

export const selectFetchUpcomingMovies = (state) => state.fecthUpcomingMovie;
export const selectUpcomingMovies = (state) => state.upcomingMovies

export const selectfetchSelectedMovie = (state) => state.fetchSelectedMovie;
export const selectSelectedMovie = (state) => state.selectedMovie;

export const selectFetchSearchMovie = (state) => state.fetchSearchMovie;
export const selectSearchMovie = (state) => state.searchMovie;

export const selectFetchSimilarMovie = (state) => state.fetchSimilarMovie;
export const selectSimilarMovie = (state) => state.similarMovie;

export const selectFetchTrailer = (state) => state.fetchTrailerMovie;
export const selectTrailerMovie = (state) => state.trailerMovie;

export const selectFetchTopRatedMovie = (state) => state.fetchTopRatedMovie;
export const selectTopRatedMovie = (state) => state.topRatedMovie;

export default useMovieStore;