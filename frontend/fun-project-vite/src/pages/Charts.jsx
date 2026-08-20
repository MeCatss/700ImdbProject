import {useState, useEffect} from 'react'
import axios from 'axios'
const Charts = () => {

    const [genres, setgenres] = useState([]);
    useEffect(() => {
        const getgenres = async () => {
        const res = await axios('http://127.0.0.1:8000/movies');
        console.log(res.data);
        setgenres(res.data);
        };
        getgenres();
    }, []);

    // const [moviedata, setmoviedata] = useState([]);
    // useEffect(() => {
    //     const getMovie = async () => {
    //     const res = await axios('http://127.0.0.1:8000/movies');
    //     console.log(res.data);
    //     setmoviedata(res.data);
    //     };
    //     getMovie();
    // }, []);

    // const [moviedata, setmoviedata] = useState([]);
    // useEffect(() => {
    //     const getMovie = async () => {
    //     const res = await axios('http://127.0.0.1:8000/movies');
    //     console.log(res.data);
    //     setmoviedata(res.data);
    //     };
    //     getMovie();
    // }, []);

    return (
            <h1>Charts</h1>
    )
}

export default Charts