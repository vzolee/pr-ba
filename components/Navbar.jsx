import { Link } from "react-router-dom"; // linkek miatt be kell importálni 

function Navbar() {
    return (
        <div className="navbar bg-sky-200">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost text-xl">Főoldal</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/tanulok'}>Tanulók listája</Link></li>
                    <li><Link to={'/ujtanulo'}>Új tanuló rögzítése</Link></li>                 
                </ul>
            </div>
        </div>
    )
}

export default Navbar