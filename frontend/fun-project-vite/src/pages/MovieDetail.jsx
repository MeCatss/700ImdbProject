import {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const MovieDetail = () => {

    const{rank}=useParams()
    const [moviedetail, setmoviedetail] = useState([]);
    useEffect(() => {
        const getMovieDetail = async () => {
        const res = await axios(`http://127.0.0.1:8000/movies/1`); 
        //////////// 1 is not supposed to be hardcoded
        console.log(res.data.movie);
        setmoviedetail(res.data.movie);
        };
        getMovieDetail();
    }, []);

    return (
        <div>
            <div key={moviedetail.Rank} 
                style={{border: '10px solid black',
                        margin: '20px',
                        padding: '10px'
                        }}
                >
                    <h1>Movie Detail</h1>
                    <h3>{moviedetail.Title}</h3>
                    <p>Rank: {moviedetail.Rank}</p>
                    <p>Genre: {moviedetail["Genre(s)"]}</p>
                    <p>Runtime (mins): {moviedetail["Runtime (mins)"]}</p>
                    <p>Director: {moviedetail.Director}</p>
                    <p>Country : {moviedetail.Country}</p>
                    <p>Actor(s): {moviedetail["Main Actor(s)"]}</p>
                    <p>Year: {moviedetail["Year"]}</p>
                    <p>Rating: {moviedetail["IMDb Rating"]}   Votes: {moviedetail.Votes}</p>
                </div>
            
        </div>
    )
}

export default MovieDetail