import {useState, useEffect} from 'react'
import axios from 'axios'
import GenreTreeMap from '../components/GenreTreeMap.jsx'
import DecadeLine from '../components/DecadeLine.jsx'
import SimpleBarChart from '../components/DirectorsBar.jsx'

const Charts = () => {

    const [totalgenres, settotalgenres] = useState([]);
    useEffect(() => {
        const gettotalgenres = async () => {
        const res = await axios('http://127.0.0.1:8000/stats/genres');
        console.log(res.data);
        settotalgenres(res.data);
        };
        gettotalgenres();
    }, []); // To get how many genres valuecount in the database
    // const genreArray = totalgenres?.genres ? Object?.entries(totalgenres?.genres) : []; // convert jeson object into array
    
    const datagenre = totalgenres?.genres ? Object.entries(totalgenres.genres).map(([genre, count]) =>{
        return { name: genre, size: count};
    }) : []; // turning total genre object into array with added label name and size, used optional chainig and if/else statement
    const sliceddatagenre = datagenre.slice(0, 12);
    // console.log(sliceddatagenre, 11)
    // console.log(datagenre, 22)


    const [decade, setdecade] = useState([]);
    useEffect(() => {
        const getDecade = async () => {
        const res = await axios('http://127.0.0.1:8000/stats/decades');
        console.log(res.data, 123);
        setdecade(res.data);
        };
        getDecade();
    }, []); // To get average rating per decade.
    
    const dataDecade = decade?.avg_ratings_by_decade ? Object.entries(decade.avg_ratings_by_decade).map(([decade, rates]) =>{
        return {decade: decade, avgRating: rates};
    }) : [];
    // console.log(dataDecade, 123)

    const [directors, setdirectors] = useState([]);
    useEffect(() => {
        const getDirectors = async () => {
        const res = await axios('http://127.0.0.1:8000/stats/topdirectors');
        // console.log(res.data, 22222222222);
        setdirectors(res.data);
        };
        getDirectors();
    }, []); // To get how many movies top 10 director has directed the most.
    const dataDirectors = directors?.top_directors ? Object.entries(directors.top_directors).map(([directors, total])=>{
        return {director: directors, total: total};
    }) : [];
    // console.log(dataDirectors, 11111111111);

    return (
        <div>
            <h1>Charts</h1>
            <div style={{ marginBottom: "20px", marginLeft: "20px" }}>
                <GenreTreeMap data={sliceddatagenre} />
            </div>
            <div style={{ marginBottom: "20px"}}>
                <DecadeLine data={dataDecade} />
            </div>
            <div show ={directors}/>
        
            <div style={{ marginBottom: "20px"}}>
                <SimpleBarChart data={dataDirectors}/>
            </div>

        </div>
    )
}

export default Charts