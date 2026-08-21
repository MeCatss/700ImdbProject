import {useState, useEffect} from 'react'
import axios from 'axios'
const Charts = () => {

    const [genres, setgenres] = useState([]);
    useEffect(() => {
        const getgenres = async () => {
        const res = await axios('http://127.0.0.1:8000/stats/genres');
        console.log(res.data);
        setgenres(res.data);
        };
        getgenres();
    }, []); // To get how many genres valuecount in the database

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
            <h1>Charts</h1>
    )
}

export default Charts