import '../Styles/Styles.css'
import Profile2 from '../Images/profile2.webp'
import Card from '../Components/Card'
import projects from '../Datas/projects.json'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            {/* COUVERTURE */}

            <main>
                {/* SECTION GRISE 1 */}
                <div className="section section-grise1">
                    <div className="separateur" />
                    <p>
                        Je développe votre <b>projet de site WEB</b>
                        <br />
                        de A à Z
                    </p>
                </div>
                {/* SECTION BLANCHE */}
                <div className="section">
                    <h2>En savoir plus</h2>
                    <img
                        src={Profile2}
                        alt="Rafik Ben Sadi en train de travailler"
                        className="col-contenu"
                    />
                    <div className="col-contenu float-right">
                        <div className="texte-avec-ligne-verticale">
                            <p className="texte-profile-description">
                                Développeur fullstack curieux, autodidacte et
                                passionné par les technologies numériques depuis
                                l'enfance, j'ai fait mes premières armes en
                                programmation à 10 ans en apprenant par moi-même
                                les bases du langage C grâce à des ouvrages
                                dénichés dans la bibliothèque paternelle. Après
                                un parcours universitaire d'historien-chercheur,
                                j'ai décidé de me reconvertir dans le
                                développement informatique en suivant les cours
                                sur le langage Python de Jonathan Roux sur
                                Udemy.com. Enfin, je me suis spécialisé dans le
                                développement Web en suivant le parcours
                                diplomant d'OpenClassrooms.com (anciennement
                                Site du Zéro). <br />
                                Au fil de mon parcours dans le développement,
                                j'ai réalisé de nombreux projets très divers :
                                des programmes simples en mode console, par
                                exemple le "Jeu de Maths" pour les écoliers
                                ayant besoin de réviser leurs maths avant un
                                contrôle. J'ai également réalisé des programmes
                                plus complexes comme des logiciels desktop, à
                                l'image de "MrBeat", une boîte à rythmes
                                digitale, ou de "Galaxy", un jeu vidéo de
                                parcours d'un vaisseau spatial en 3D
                                isométrique. Enfin, j'ai réalisé un certain
                                nombre de projets Web et Web mobile, dont vous
                                pouvez avoir un bel aperçu dans la section
                                Portfolio qui suit.
                            </p>
                            <Link to="#">En savoir plus sur mon profil</Link>
                        </div>
                    </div>
                </div>
                {/* SECTION GRISE 2 */}
                <div className="section section-grise2">
                    <h2>Portfolio</h2>
                    <div className="projects-cardslist">
                        {projects.map((project) => (
                            <Card key={`${project.id}`} project={project} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
