import {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router'
import countryMap from '../components/countryMap'

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
        <div className="min-h-screen bg-black text-white px-8 py-6 max-w-4xl mx-auto">

            {/* Movie Detail */}
            <h1 className='text-3xl font-bold text-cyan-400 mb-8'>Movie Detail</h1>
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 mb-8">
                <h3 className="text-3xl font-bold text-cyan-400 mb-4">{moviedetail.Title}</h3>
                <p className="text-zinc-400 mb-1">Rank: <span className="text-white">{moviedetail.Rank}</span></p>
                <p className="text-zinc-400 mb-1">Genre: <span className="text-white">{moviedetail["Genre(s)"]}</span></p>
                <p className="text-zinc-400 mb-1">Runtime (mins): <span className="text-white">{moviedetail["Runtime (mins)"]}</span></p>
                <p className="text-zinc-400 mb-1">Director: <span className="text-white">{moviedetail.Director}</span></p>
                <p className="text-zinc-400 mb-1">Country: <span className="text-white">{moviedetail.Country?.split('|').map(code => countryMap[code] || code).join(', ')}</span></p>
                <p className="text-zinc-400 mb-1">Actor(s): <span className="text-white">{moviedetail["Main Actor(s)"]?.split('|').join(', ')}</span></p>
                <p className="text-zinc-400 mb-1">Year: <span className="text-white">{moviedetail.Year}</span></p>
                <p className="text-zinc-400 mb-1">
                    Rating: <span className="text-white">{moviedetail["IMDb Rating"]}</span>
                    {"   "}
                    Votes: <span className="text-white">{moviedetail.Votes}</span>
                </p>
            </div>
            {/* Recommendations */}
            <h2 className="text-xl font-semibold text-cyan-400 mb-4">
                You might also like
            </h2>
            <div className="grid grid-cols-5 gap-3">
                {movierec.map((movie) => (
                    <div
                        key={movie.Rank}
                        className="bg-zinc-900 rounded-lg p-3 border border-zinc-800 cursor-pointer hover:border-cyan-400 text-sm"
                        onClick={() => navigate(`/movies/${movie.Rank}`)}
                    >
                        <h3>{movie.Title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieDetail