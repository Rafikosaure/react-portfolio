import '../Styles/Styles.css'
import Profile from '../Images/profile.webp'

function Footer() {
    return (
        <div className="iframe">
            <div className="section">
                <div
                    className="separateur display-mobile"
                    style={{ marginBottom: 15 }}
                />
                <div className="frame">
                    <p className="frame-title">Parlons de votre projet</p>
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
