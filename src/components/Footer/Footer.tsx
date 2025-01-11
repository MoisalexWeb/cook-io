import "./Footer.scss"
import apiLogo from "/public/images/API-logo.png"
import logoLight from "/public/images/logo-light.svg"
import logoDark from "/public/images/logo-dark.svg"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__copy">
                    <p className="footer__copy-text">
                        coded by <a href="https://github.com/MoisalexWeb/" target="_blank" rel="noopener">MoisalexWeb</a>&#160;
                        inspired by <a href="https://github.com/codewithsadee" target="_blank" rel="noopener">codewithsadee</a>
                    </p>
                </div>

                <figure className="footer__logo">
                    <img src={logoDark} alt="Cook io logo" className="footer__logo-img" data-logo-dark />
                    <img src={logoLight} alt="Cook io logo" className="footer__logo-img" data-logo-light />
                </figure>

                <a href="https://www.themealdb.com/api.php" target="_blank" rel="noopener" className="footer__api">
                    <img src={apiLogo} alt="The meal DB logo" className="footer__api-logo" />
                </a>
            </div>
        </footer>
    )
}
