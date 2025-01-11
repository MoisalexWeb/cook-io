import "./DesktopNavbar.scss"
import { NavLink } from "react-router-dom"
import logoLight from "/public/images/logo-light.svg"
import logoDark from "/public/images/logo-dark.svg"
import { useSetTheme } from "./hooks/useSetTheme.ts" 


export const DesktopNavbar = () => {
    const { theme, changeTheme } = useSetTheme()

    return (
        <header className="header">
            <nav className="desktopNavbar">
                <figure className="desktopNavbar__figure">
                    <img src={logoLight} alt="Cook.io logo" data-logo-light className="desktopNavbar__figure-logo" />
                    <img src={logoDark} alt="Cook.io logo" data-logo-dark className="desktopNavbar__figure-logo" />
                </figure>

                <ul className="desktopNavbar__ul">
                    <li>
                        <NavLink className="desktopNavbar__ul-link" to="/">home</NavLink>
                    </li>

                    <li>
                        <NavLink className="desktopNavbar__ul-link" to="recipes">recipes</NavLink>
                    </li>
                </ul>

                <div className="desktopNavbar__buttons">
                    <button className="desktopNavbar__buttons-theme"
                        onClick={changeTheme}
                    >
                        {
                            theme === "light" ? <i className='bx bx-moon'></i> : <i className='bx bx-sun' ></i>
                        }                        
                    </button>

                    <NavLink to="saved" className="desktopNavbar__buttons-saved">
                        <i className='bx bx-bookmark'></i>
                        saved recipes
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}
