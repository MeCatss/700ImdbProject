import {useState, useEffect} from 'react'
import axios from 'axios'
import { PrefetchPageLinks } from 'react-router-dom';

const Home = () => {
    const [moviedata, setmoviedata] = useState([]);// to fetch full movie data
    useEffect(() => {
        const getMovie = async () => {
        const res = await axios('http://127.0.0.1:8000/movies');
        // console.log(res.data.movies);
        setmoviedata(res.data.movies);
        };
        getMovie();
    }, []);

const [totalgenres, settotalgenres] = useState([]); // to fetch most used genres
    useEffect(() => {
        const gettotalgenres = async () => {
        const res = await axios('http://127.0.0.1:8000/stats/genres');
        console.log(res.data.genres, "olol");
        settotalgenres(res.data.genres);
        };
        gettotalgenres();
    }, []);
     const genreArray = totalgenres ? Object.entries(totalgenres) : []; // convert jeson object into array

const averageRating = (() => {
        if (!moviedata || moviedata.length === 0) return 0;

        const total = moviedata.reduce((sum, movie) => sum + Number(movie["IMDb Rating"] || 0), 0);
        return (total / moviedata.length).toFixed(2);
    })();

const [directors, setdirectors] = useState([]);
    useEffect(() => {
        const getDirectors = async () => {
        const res = await axios('http://127.0.0.1:8000/stats/topdirectors');
        console.log(res.data);
        setdirectors(res.data);
        };
        getDirectors();
    }, []);

    const directorsarray = directors?.top_directors ? Object.entries(directors?.top_directors) : []; // convert jeson object into array
    console.log(directorsarray)
    return (
        <div>  
                <h1>TOP 700 IMDb rated Movies</h1>
                <p>Total Movies: {moviedata.length}</p>
                <p>Highest rated movie: {moviedata[0]?.Title}</p>
                <p>Average Rating: {averageRating}</p>
                <p>Top Genre: {genreArray[0]?.[0]}  with total of {genreArray[0]?.[1]} movies</p>
                <p>Top Directors: {directorsarray[0]?.[0]} with total of {directorsarray[0]?.[1]} movies directed</p>
        </div>
            
    )
    }

export default Home