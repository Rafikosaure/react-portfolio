import '../Styles/Styles.css'
import Profile2 from '../Images/profile2.webp'
import Html5 from '../Images/html5.svg'
import Css3 from '../Images/css3.svg'
import Api from '../Images/api.png'
import Django from '../Images/django.svg'
import Express from '../Images/express.svg'
import Javascript from '../Images/javascript.svg'
import Linux from '../Images/linux.png'
import MongoDB from '../Images/mongodb.svg'
import NodeJS from '../Images/nodejs.svg'
import PyCharm from '../Images/pycharm.png'
import Python from '../Images/python.svg'
import React from '../Images/react.svg'
import SQL from '../Images/sql.png'
import VSC from '../Images/vsc.svg'
import Windows from '../Images/windows.png'
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
                    <h2>À propos de moi</h2>
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
                                les bases du <b><i>langage C</i></b> grâce à des ouvrages
                                dénichés dans la bibliothèque paternelle. Après
                                un parcours universitaire d'historien-chercheur,
                                j'ai décidé de me reconvertir dans le
                                développement informatique en suivant les cours
                                sur le <b><i>langage Python</i></b> de Jonathan Roux sur
                                Udemy.com. Enfin, je me suis spécialisé dans le
                                développement Web en suivant le parcours
                                diplomant d'<b><i>OpenClassrooms.com</i></b> (anciennement
                                Site du Zéro). <br />
                                Au fil de mon parcours dans le développement,
                                j'ai réalisé de nombreux projets très divers :
                                des programmes simples en mode console, par
                                exemple le "Jeu de Maths" pour les écoliers
                                ayant besoin de réviser leurs maths avant un
                                contrôle. J'ai également réalisé des programmes
                                plus complexes comme des <b><i>logiciels desktop</i></b>, à
                                l'image de <b><i>MrBeat</i></b>, une boîte à rythmes
                                digitale, ou de <b><i>Galaxy</i></b>, un jeu vidéo de
                                parcours d'un vaisseau spatial en 3D
                                isométrique. Enfin, j'ai réalisé un certain
                                nombre de <b><i>projets Web et Web mobile</i></b>, dont vous
                                pouvez avoir <a href='#portfolio'>un aperçu ici</a>.
                            </p>
                            <Link to="#">En savoir plus sur mon profil</Link>
                        </div>
                    </div>
                </div>
                <div className="div-competences">
                    <h2>Mes Compétences</h2>
                    <div className='div-competences-orientation'>
                        <ul>
                            <h3 className='competences-title'>Frontend</h3>
                            <li className='list-item-competence'><img className='list-icon' src={Html5} alt='Icone HTML5'/>HTML5</li>
                            <li className='list-item-competence'><img className='list-icon' src={Css3} alt='Icone CSS3'/>CSS3 / SASS</li>
                            <li className='list-item-competence'><img className='list-icon' src={Javascript} alt='Icone Javascript'/>Javascript</li>
                            <li className='list-item-competence'><img className='list-icon' src={React} alt='Icone ReactJS'/>React JS</li>
                            <li className='list-item-competence'><img className='list-icon' src={Python} alt='Icone Python'/>Python</li>
                        </ul>
                        <ul>
                            <h3 className='competences-title'>Backend</h3>
                            <li className='list-item-competence'><img className='list-icon' src={SQL} alt='Icone SQL'/>SQL</li>
                            <li className='list-item-competence'><img className='list-icon' src={MongoDB} alt='Icone MongoDB'/>MongoDB</li>
                            <li className='list-item-competence'><img className='list-icon' src={NodeJS} alt='Icone NodeJS'/>Node JS</li>
                            <li className='list-item-competence'><img className='list-icon' src={Express} alt='Icone ExpressJS'/>Express JS</li>
                            <li className='list-item-competence'><img className='list-icon' src={Django} alt='Icone Django'/>Django</li>                           
                        </ul>
                        <ul>
                            <h3 className='competences-title'>Divers</h3>
                            <li className='list-item-competence'><img className='list-icon' src={Api} alt='Icone API'/>API</li>
                            <li className='list-item-competence'><img className='list-icon' src={Linux} alt='Icone Linux'/>Linux</li>
                            <li className='list-item-competence'><img className='list-icon' src={Windows} alt='Icone Windows'/>Windows</li>
                            <li className='list-item-competence'><img className='list-icon' src={PyCharm} alt='Icone PyCharm'/>PyCharm</li>
                            <li className='list-item-competence'><img className='list-icon' src={VSC} alt='Icone Visual Studio Code'/>Visual Studio Code</li>
                        </ul>
                    </div>
                </div>
                {/* SECTION GRISE 2 */}
                <div className="section section-grise2">
                    <h2 id='portfolio'>Portfolio</h2>
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
