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
        <div className='min-h-screen bg-black text-white px-8 py-12 max-w-5xl mx-auto'>  
            <h1 className='text-4xl font-bold text-cyan-400 mb-8'
            >TOP 700 Movies IMDb Rated</h1>
                <div className='grid grid-cols-2 gap-4 max-w-3xl'>
                    <div className='bg-zinc-900 rounded-xl p-6 border border-zinc-800'>
                        <p className='text-zinc-500 text-sm mb-1'
                        >The Number 1 Movie</p>
                        <p className='text-white font-semibold text-lg'
                        >{moviedata[0]?.Title}</p>
                    </div>

                    <div className='bg-zinc-900 rounded-xl p-6 border border-zinc-800'>
                        <p className='text-zinc-500 text-sm mb-1'
                        >Average Rating</p>
                        <p className='text-white font-semibold text-lg'
                        >{averageRating}</p>
                    </div>

                    <div className='bg-zinc-900 rounded-xl p-6 border border-zinc-800'>
                        <p className='text-zinc-500 text-sm mb-1'>The Number 1 Genre</p>
                        <p className='text-white font-semibold text-lg'>{genreArray[0]?.[0]}  with {genreArray[0]?.[1]} movies</p>
                    </div>

                    <div className='bg-zinc-900 rounded-xl p-6 border border-zinc-800'>
                        <p className='text-zinc-500 text-sm mb-1'>Top Director</p>
                        <p className='text-white font-semibold text-lg'>{directorsarray[0]?.[0]} with {directorsarray[0]?.[1]} movies directed</p>
                    </div>
                </div>
                
        </div>
            
    )
    }

export default Home