import {useState, useEffect} from 'react'
import axios from 'axios'

const Movies = () => {
    const [moviedata, setmoviedata] = useState([]);
    useEffect(() => {
        const getMovie = async () => {
        const res = await axios('http://127.0.0.1:8000/movies');
        console.log(res.data);
        setmoviedata(res.data);
        };
        getMovie();
    }, []);
    return (
            <h1>Movies</h1>
    )
}

export default Movies