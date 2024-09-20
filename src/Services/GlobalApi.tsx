import axios from "axios"

const apiKey = '1bd7011b70185a36cfb905011141a505'
const movieBaseUrl= 'https://api.themoviedb.org/3/movie'
const movieByGenreBaseUrl= 'https://api.themoviedb.org/3/discover/movie'

const getPopularMovies = axios.get(movieBaseUrl+'/popular?api_key='+apiKey)
const getMovieByGenreId = (id:number) => axios.get(movieByGenreBaseUrl + '?api_key=' + apiKey + '&with_genres=' + id)

export default {
    getPopularMovies,
    getMovieByGenreId
}