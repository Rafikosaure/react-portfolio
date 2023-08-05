import '../Styles/Styles.css'

function Project() {
    return (
        <div>
            {/* HEADER */}
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
            <main>
                {/* SECTION GRISE TITRE */}
                <div className="section section-grise1" style={{ paddingTop: 20 }}>
                <a className="portfolio-back" href="/">
                    Retour
                </a>
                <div className="separateur" style={{ marginTop: "-12px" }} />
                <h1 className="portfolio">Portfolio</h1>
                <h2 className="portfolio">Titre à remplacer</h2>
                </div>
                {/* SECTION CONTENU */}
                <div className="section">
                <div className="texte-avec-ligne-verticale">
                    Description
                    <br />
                    <br />
                    <u>Technologies utilisées</u> : <b>Technologies</b>
                </div>
                <div style={{ textAlign: "center", marginTop: 30 }}>
                    <a href="#">
                    <img className="portfolio" alt='Couverture de projet' src="#" />
                    </a>
                    <a style={{ display: "block", marginTop: 8 }} href="#">
                    Consulter le projet
                    </a>
                </div>
                </div>
            </main>
        </div>
    )
}

export default Project