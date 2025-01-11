import "./MobileNavbar.scss"
import { NavLink } from "react-router-dom"

export const MobileNavbar = () => {
    return (
        <nav className="mobileNavbar">
            <ul className="mobileNavbar__ul">
                <li>
                    <NavLink to="/recipes" className="mobileNavbar__ul-link">
                        <i className='bx bx-food-menu'></i>
                        recipes
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/" className="mobileNavbar__ul-link">
                        <i className='bx bx-home-alt-2'></i>
                        home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/saved" className="mobileNavbar__ul-link">
                        <i className='bx bx-bookmark'></i>
                        saved
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

