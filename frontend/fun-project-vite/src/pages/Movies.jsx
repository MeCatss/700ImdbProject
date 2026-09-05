import {useState, useEffect, useMemo} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'

const Movies = () => {
    let navigate = useNavigate();
    const [moviedata, setmoviedata] = useState([]);
    useEffect(() => {
        const getMovie = async () => {
        const res = await axios('https://700imdbproject-production.up.railway.app/movies');
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
    const [selectedRR, setSelectedRR] = useState(null);
    
    const genreList   =['Drama', 'Crime', 'Biography', 'Action', 'Comedy', 'Mystery', 'Horror', 'Animation', 'Documentary', 'Fantasy', 'Adventure']
    const decadeList  =[1920, 1930,  1940,  1950,  1960,  1970,  1980,  1990, 2000, 2010, 2020]
    const ratingRange = [
        { label: "7.0 - 7.5", min: 7.0, max: 7.5 },
        { label: "7.5 - 8.0", min: 7.5, max: 8.0 },
        { label: "8.0 - 8.5", min: 8.0, max: 8.5 },
        { label: "8.5 - 9.0", min: 8.5, max: 9.0 },
        { label: "9.0 - 9.5", min: 9.0, max: 9.5 }
    ];

    const filteredMovie = useMemo(() => {
        return moviedata.filter(movies => 
            (selectedGenre.length === 0 || selectedGenre.every(genre => movies["Genre(s)"].includes(genre)))
            && (selectedDecade.length === 0 || selectedDecade.includes(movies.Decade))
            && (selectedRR === null || (movies['IMDb Rating'] >= selectedRR.min && movies['IMDb Rating'] <= selectedRR.max))
        );
    }, [selectedGenre, selectedDecade, selectedRR, moviedata]);
    console.log(selectedGenre, selectedDecade, selectedRR, 123)
        
    return (
        
        <div className='min-h-screen bg-black text-white px-8 py-6 max-w-5xl mx-auto'>
            <h1 className='text-3xl font-bold text-cyan-400 mb-6'>Movie List</h1>

            <div className='flex flex-wrap gap-2 mb-4'>
                <div className='bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm cursor-pointer gap-2 flex flex-wrap'>
                    {genreList.map((genre) => (
                    <button 
                    key={genre} 
                    className={`px-3 py-1 rounded-full text-sm cursor-pointer border transition-colors
                    ${selectedGenre.includes(genre) 
                        ? 'bg-cyan-400 text-black border-cyan-400' 
                        : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-cyan-400 hover:text-black'}`}
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

                <div className='bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm cursor-pointer gap-2 flex flex-wrap'>
                    {decadeList.map((decade) => (
                    <button 
                    key={decade} 
                    className={`px-3 py-1 rounded-full text-sm cursor-pointer border transition-colors
                    ${selectedGenre.includes(decade) 
                        ? 'bg-cyan-400 text-black border-cyan-400' 
                        : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-cyan-400 hover:text-black'}`}
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

                <div className='bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm cursor-pointer gap-2 flex flex-wrap'>
                    {ratingRange.map((RR) => (
                    <button 
                    key={RR.label} 
                    className={`px-3 py-1 rounded-full text-sm cursor-pointer border transition-colors
                    ${selectedGenre.includes(RR) 
                        ? 'bg-cyan-400 text-black border-cyan-400' 
                        : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-cyan-400 hover:text-black'}`}
                    onClick={() => {
                        setSelectedRR(selectedRR?.label === RR.label ? null : RR)
                        }}
                    value={RR}
                    >
                    {RR.label}
                    </button>
                    ))}
                </div>

                <div className='bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-400 hover:text-black cursor-pointer gap-2 flex flex-wrap'>
                    <button onClick={() => {setSelectedRR(null); setSelectedDecade([]); setSelectedGenre([]);}}
                        >Clear All Filter</button>
                </div>
            </div>
            
            <div className='grid grid-cols-3 gap-4 mt-6'>
                {filteredMovie.map((movies) => (
                    <div key={movies.Rank} 
                    className='bg-zinc-900 rounded-xl p-4 border border-zinc-800 cursor-pointer hover:border-cyan-400'
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
                
                
        </div>
    )
}

export default Movies