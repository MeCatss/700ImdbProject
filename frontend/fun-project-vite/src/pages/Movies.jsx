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

        const [selectedGenre, setSelectedGenre] = useState([]);
        const [selectedDecade, setSelectedDecade] = useState([]);
        const [selectedRR, setSelectedRR] = useState([]);

        const filteredMovie = useMemo(() => {
            return moviedata.filter(movies => 
                (selectedGenre.length === 0 || selectedGenre.every(genre => movies["Genre(s)"].includes(genre)))
                && (selectedDecade.length === 0 || selectedDecade.includes(movies.Decade))
            );
        }, [selectedGenre, selectedDecade, moviedata]);
        console.log(selectedGenre, selectedDecade,123)

        const genreList   =['Drama', 'Crime', 'Biography', 'Action', 'Comedy', 'Mystery', 'Horror', 'Animation', 'Documentary', 'Fantasy', 'Adventure']
        const decadeList  =[1920, 1930,  1940,  1950,  1960,  1970,  1980,  1990, 2000, 2010, 2020]
        const ratingRange =[7.0-7.5, 7.5-8.0, 8.0-8.5, 8.5-9.0, 9.0-9.5]
        
    return (
        
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Movies</h2>

            <div style={{ padding: '5px', borderRadius: '4px' }}>
                <button onClick={() => setSelectedGenre([])}>Reset Genre</button>
                {genreList.map((genre) => (
                <button 
                key={genre} 
                onClick={(e) => {
                    const clickedGenre = e.target.value;
                    // If clicked again, reset to 'All'. Otherwise, set to the clicked genre.
                     setSelectedGenre((prevGenres) => {
                        if (prevGenres.includes(clickedGenre)) {
                        return prevGenres.filter((genre) => genre !== clickedGenre);
                        }
                        return [...prevGenres, clickedGenre];
                    });
                    }}
                value={genre}
                >
                {genre}
                </button>
                ))}
            </div>

            <div style={{ padding: '5px', borderRadius: '4px' }}>
                <button onClick={() => setSelectedDecade([])}>Clear Decade List</button>
                {decadeList.map((decade) => (
                <button 
                key={decade} 
                onClick={(e) => {
                    const clickedDecade = parseInt(e.target.value);
                     setSelectedDecade((prevDecade) => {
                        if (prevDecade.includes(clickedDecade)) {
                        return prevDecade.filter((decade) => decade !== clickedDecade);
                        }
                        return [...prevDecade, clickedDecade];
                    });
                    }}
                value={decade}
                >
                {decade}
                </button>
                ))}
            </div>

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
                
        </div>
    )
}

export default Movies