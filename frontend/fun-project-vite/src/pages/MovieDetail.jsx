import {useState, useEffect} from 'react'
import axios from 'axios'

const MovieDetail = () => {

    const [moviedetail, setmoviedetail] = useState([]);
    useEffect(() => {
        const getMovieDetail = async () => {
        const res = await axios('http://127.0.0.1:8000/movies/1'); 
        //////////// 1 is not supposed to be hardcoded
        console.log(res.data);
        setmoviedetail(res.data);
        };
        getMovieDetail();
    }, []);

    return (
            <h1>Movie Detail</h1>
    )
}

export default MovieDetail