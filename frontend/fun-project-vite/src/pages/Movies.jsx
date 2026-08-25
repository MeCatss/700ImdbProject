import {useState, useEffect, useMemo} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'

const Movies = () => {
    let navigate = useNavigate();
    const [moviedata, setmoviedata] = useState([]);
    useEffect(() => {
        const getMovie = async () => {
        const res = await axios('http://127.0.0.1:8000/movies');
        // console.log(res.data.movies);
        setmoviedata(res.data.movies);
        };
        getMovie();
        
    }, []);

//   2. State to track the active dropdown category
        const [selectedGenre, setSelectedGenre] = useState('All');

        // 3. Compute the filtered array dynamically
        const filteredMovie = useMemo(() => {
            if (selectedGenre === 'All') {
            return moviedata;
            }
            return moviedata.filter(movies => movies["Genre(s)"].includes(selectedGenre));
            //To check if substring exist withing a string practically not safe but since distinct
        }, [selectedGenre, moviedata]);
        // console.log(filteredMovie,123)
        //movies["Primary Genre)"]

    return (
        
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Movies</h2>

            <label htmlFor="genre-select" style={{ marginRight: '10px' }}>
                Filter by Main Genre:
            </label>
            <select 
                id="genre-select"
                value={selectedGenre} 
                onChange={(e) => setSelectedGenre(e.target.value)}
                style={{ padding: '5px', borderRadius: '4px' }}
            >
                <option value="All">All Genre</option>
                <option value="Drama">Drama</option>
                <option value="Crime">Crime</option>
                <option value="Biography">Biography</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Mystery">Mystery</option>
                <option value="Horror">Horror</option>
                <option value="Animation">Animation</option>
                <option value="Documentary">Documentary</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Adventure">Adventure</option>
            </select>

            {/* <ul style={{ marginTop: '20px', lineHeight: '2' }}>
                {filteredMovie.map(movies => (
                <li key={movies.Rank}>
                    <strong>{movies.Title}</strong> - <em>{movies["Primary Genre"]}</em>
                </li>
                ))}
            </ul>
            {filteredMovie.length === 0 && <p>No products found.</p>} */}

            {filteredMovie.map((movies) => (
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