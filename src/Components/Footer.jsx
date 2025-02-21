import '../Styles/CommonStyles.scss'
import Profile from '../Images/profile.webp'
import { useTheme } from '../Context/ThemeContext'


function Footer() {

    const { colorMainMode, colorElementMode } = useTheme()


    return (
        <div className={`iframe ${colorMainMode}`}>
            <div className="section">
                <div
                    className="separateur display-mobile"
                    style={{ marginBottom: 15 }}
                />
                <div className={`frame frame-mode${colorElementMode}`}>
                    <h2 className="frame-title">Parlons de votre projet</h2>
                    <table style={{ width: '100%' }}>
                        <tbody>
                            <tr>
                                <td valign="top" align="center">
                                    <img
                                        alt="Profil de Rafik Ben Sadi"
                                        src={Profile}
                                    />
                                </td>
                                <td>
                                    <div
                                        className="texte-avec-ligne-verticale"
                                        style={{ marginLeft: 20 }}
                                    >
                                        <p>
                                            Besoin de discuter de votre projet
                                            et obtenir l'avis d'un expert ?
                                            <br />
                                            <br />
                                            Contactez-moi par{' '}
                                            <a href="mailto:rafikbensadi@live.fr?subject=Contact%20depuis%20rafikbensadi.com">
                                                email
                                            </a>{' '}
                                            ou directement par téléphone au{' '}
                                            <a href="tel:+33649363839">
                                                06 49 36 38 39
                                            </a>
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Footer
