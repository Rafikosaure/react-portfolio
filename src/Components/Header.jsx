import '../Styles/CommonStyles.scss'
import { useLocation } from 'react-router-dom'
import Profile1 from '../Images/profile.webp'

function Header() {
    const location = useLocation()

    return (
        <div>
            {location.pathname === '/' ? (
                <header className="cover">
                    <img
                        className="cover-profile"
                        alt="Profil de Rafik Ben Sadi"
                        src={Profile1}
                    />
                    <h1>Rafik Ben Sadi</h1>
                    <p className="cover-description">
                        Développeur Fullstack | React -
                        Node JS - Express
                    </p>
                    <div style={{ textAlign: 'center' }}>
                        <a
                            className="contact-button"
                            href="mailto:rafikbensadi@live.fr?subject=Contact%20depuis%20rafikbensadi.com"
                        >
                            ME CONTACTER
                        </a>
                    </div>
                    <div className="cover-contact">
                        <p>
                            <a href="mailto:rafikbensadi@live.fr?subject=Contact%20depuis%20rafikbensadi.com">
                                rafikbensadi@live.fr
                            </a>
                        </p>
                        <p>
                            <a href="tel:+33649363839">06 49 36 38 39</a>
                        </p>
                    </div>
                </header>
            ) : (
                <header className="portfolio-header">
                    <div
                        className="texte-avec-ligne-verticale"
                        style={{ marginLeft: 16, marginTop: 22, height: 45 }}
                    >
                        <p className="portfolio-header-title">Rafik Ben Sadi</p>
                    </div>
                    <a
                        className="contact-button contact-button-portfolio"
                        href="mailto:rafikbensadi@live.fr?subject=Contact%20depuis%20rafikbensadi.com"
                    >
                        ME CONTACTER
                    </a>
                </header>
            )}
        </div>
    )
}

export default Header
