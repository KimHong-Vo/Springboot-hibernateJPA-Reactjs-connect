import './nav.scss'
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (

        <div className="topnav">
            <NavLink activeclassname= "active"  to="/">Home</NavLink>
            <NavLink activeclassname= "active" to = "/New">News</NavLink>
            <NavLink activeclassname= "active" to="/Contact">Contact</NavLink>
            <NavLink activeclassname= "active" to="/about">About</NavLink>
        </div>

    )
}

export default Nav;