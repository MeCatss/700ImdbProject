import {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router'

const MovieDetail = () => {
    let navigate = useNavigate();
    const {rank}=useParams()
    const [moviedetail, setmoviedetail] = useState([]);
    useEffect(() => {
        const getMovieDetail = async () => {
        const res = await axios(`http://127.0.0.1:8000/movies/${rank}`); 
        console.log(res.data.movie);
        setmoviedetail(res.data.movie);
        };
        getMovieDetail();
    }, [rank]);

    const [movierec, setmovierec] = useState([]);
    useEffect(() => {
        if(!moviedetail.Title) return
        const getmovierec = async () => {
        const res = await axios(`http://127.0.0.1:8000/recommendations/${encodeURIComponent(moviedetail.Title)}`)
        console.log(res.data.movie,123323)
        setmovierec(res.data.movie)    
        };
        getmovierec()
    }, [moviedetail])

    return (
        <div>
            <div key={moviedetail.Rank} 
                style={{border: '10px solid black',
                        margin: '20px',
                        padding: '10px'
                        }}>
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

                {movierec.map((movie) => (
                <div key={movie.Rank} 
                style={{border: '10px solid black',
                        margin: '20px',
                        padding: '10px',
                        cursor:"pointer"}}
                onClick={() => navigate(`/movies/${movie.Rank}`)}
                >
                    <h3>{movie.Title}</h3>
                </div>
            ))}
            
        </div>
    )
}

export default MovieDetail