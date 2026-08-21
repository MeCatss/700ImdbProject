import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'

const Movies = () => {
    let navigate = useNavigate();
    const [moviedata, setmoviedata] = useState([]);
    useEffect(() => {
        const getMovie = async () => {
        const res = await axios('http://127.0.0.1:8000/movies');
        console.log(res.data.movies);
        setmoviedata(res.data.movies);
        };
        getMovie();
        
    }, []);
    return (
        
        <div>
            <h2>Movies</h2>
            {moviedata.map((movies) => (
                <div key={movies.Rank} 
                style={{border: '10px solid black',
                        margin: '20px',
                        padding: '10px',
                        cursor:"pointer"}}
                onClick={() => navigate(`/movies/${movies.Rank}`)}
                >
                    
                    <h3>{movies.Title}</h3>
                    <p>Rank: {movies.Rank}</p>
                    <p>Genre: {movies["Genre(s)"]}</p>
                    <p>Runtime (mins): {movies["Runtime (mins)"]}</p>
                    <p>Rating: {movies["IMDb Rating"]}</p>
                    <p>Year: {movies["Year"]}</p> 
                </div>
            ))}
            {/* Case Sensitive on the movies.**** */}
            {/* {moviedata.length === 0 ? <p>Loading data...</p> : (
        <pre>{JSON.stringify(moviedata, null, 2)}</pre>
      )} */}
                
        </div>
    )
}

export default Movies