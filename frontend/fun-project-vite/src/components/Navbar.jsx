import {Link} from 'react-router-dom'

const Nav = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/charts">Charts</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/movies/:id">Movie Detail</Link></li>
            </ul>
        </nav>
    )
}

export default Nav