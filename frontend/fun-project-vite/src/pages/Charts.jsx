import {useState, useEffect} from 'react'
import axios from 'axios'
import GenreTreeMap from '../components/GenreTreeMap.jsx'

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
    const genreArray = totalgenres.genres ? Object.entries(totalgenres.genres) : []; // convert jeson object into array
    
    const datagenre = Object.entries(totalgenres.genres).map(([genre, count]) =>{
        return { name: genre, size: count};
    })
    console.log(totalgenres, 11)
    console.log(datagenre, 22)



    const [decade, setdecade] = useState([]);
    useEffect(() => {
        const getDecade = async () => {
        const res = await axios('http://127.0.0.1:8000/stats/decades');
        console.log(res.data);
        setdecade(res.data);
        };
        getDecade();
    }, []); // To get average rating per decade.

    const [directors, setdirectors] = useState([]);
    useEffect(() => {
        const getDirectors = async () => {
        const res = await axios('http://127.0.0.1:8000/stats/topdirectors');
        console.log(res.data);
        setdirectors(res.data);
        };
        getDirectors();
    }, []); // To get how many movies top 10 director has directed the most.

    return (
        <div>
            <h1>Charts</h1>
            <GenreTreeMap data={datagenre} />
        </div>
    )
}

export default Charts