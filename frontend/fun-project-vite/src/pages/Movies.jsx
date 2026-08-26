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
        const changeseparated =res.data.movies.map(movie =>({
            ...movie,
            ["Genre(s)"]: movie["Genre(s)"] ? movie["Genre(s)"].replaceAll('|', ', ') : ''
        }))
        console.log(changeseparated)

        setmoviedata(changeseparated);
        };
        getMovie();
        
    }, []);

    // const [moviedata, setmoviedata] = useState([]);
    // useEffect(()=>{
    // })

//   2. State to track the active dropdown category
        const [selectedGenre, setSelectedGenre] = useState([]);

        // 3. Compute the filtered array dynamically
        const filteredMovie = useMemo(() => {
            if (selectedGenre.includes('All') || selectedGenre === null) {
            return moviedata;
            }
            return moviedata.filter(movies => 
                movies["Genre(s)"].includes(selectedGenre));
            //To check if substring exist withing a string practically not safe but since distinct
        }, [selectedGenre, moviedata]);
        console.log(selectedGenre,123)
        //movies["Primary Genre)"]

        const genreList =['All', 'Drama', 'Crime', 'Biography', 'Action', 'Comedy', 'Mystery', 'Horror', 'Animation', 'Documentary', 'Fantasy', 'Adventure']

    return (
        
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Movies</h2>

            <div style={{ padding: '5px', borderRadius: '4px' }}>
                {genreList.map((genre) => (
                <button 
                key={genre} 
                onClick={(e) => {
                    const clickedGenre = e.target.value;
                    // If clicked again, reset to 'All'. Otherwise, set to the clicked genre.
                     setSelectedGenre((prevGenres) => {
                        // 1. If the genre is already in the list, remove it
                        if (prevGenres.includes(clickedGenre)) {
                        return prevGenres.filter((genre) => genre !== clickedGenre);
                        } 
                        // 2. Otherwise, add it to the list
                        return [...prevGenres, clickedGenre];
                    });
                    }}
                value={genre}
                >
                {genre}
                </button>
                ))}
            </div>

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