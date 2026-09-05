import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="bg-zinc-900 rounded-2xl flex items-center px-6 py-3 mt-4 max-w-5xl mx-auto relative">
            <span className="text-cyan-400 font-bold text-lg">The700</span>
            <ul className="flex gap-6 absolute left-1/2 -translate-x-1/2">
                <li><Link className="text-zinc-500 hover:text-white" to="/">Home</Link></li>
                <li><Link className="text-zinc-500 hover:text-white" to="/charts">Charts</Link></li>
                <li><Link className="text-zinc-500 hover:text-white" to="/movies">Movies</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar