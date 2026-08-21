import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
            NAVBAR
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/charts">Charts</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                {/* <li><Link to="/movies/:rank">Movie Detail</Link></li> */}
            </ul>
        </div>
    )
}

export default Navbar