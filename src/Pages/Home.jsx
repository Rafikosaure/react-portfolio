import '../Styles/Styles.scss'
import Profile2 from '../Images/profile2.webp'
import Html5 from '../Images/html5.svg'
import Css3 from '../Images/css3.svg'
import Api from '../Images/api.png'
// import Django from '../Images/django.svg'
import Express from '../Images/express.png'
import JavaScript from '../Images/javascript.png'
import Linux from '../Images/linux.png'
import MongoDB from '../Images/mongodb.svg'
import NodeJS from '../Images/nodejs.svg'
// import PyCharm from '../Images/pycharm.png'
import Python from '../Images/python.svg'
import React from '../Images/react.svg'
import SQL from '../Images/sql.png'
import VSC from '../Images/vsc.svg'
import Windows from '../Images/windows.png'
import LinkedIn from '../Images/linkedin.svg'
import CV_Icon from '../Images/cv.png'
import Sass from '../Images/sass.svg'
import Github from '../Images/github.svg'
import Figma from '../Images/figma.svg'
import Git from '../Images/git.png'
// import Bootstrap from '../Images/bootstrap.svg'
import Docker from '../Images/docker.svg'
import ChatGPT from '../Images/chatgpt.svg'
// import GreenIT from '../Images/greenit.png'
import Accessibilité from '../Images/accessibilité.png'
import TypeScript from '../Images/typescript.png'
// import Tailwind from '../Images/tailwind.svg'
import Terminal from '../Images/console.png'
import Postman from '../Images/postman.png'
import SEO from '../Images/SEO.png'
// import Security from '../Images/cyber-securite.png'
import CV_File from '../CV/CV_BenSadi_Rafik.pdf'
import Card from '../Components/Card'
import projects from '../Datas/projects.json'
import { useTypingEffect } from '../Hooks/Typing-effect'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

function Home() {
    const { ref: myPresentation, inView: myPresentationIsVisible } = useInView();
    const { ref: myPicture, inView: myPictureIsVisible } = useInView();
    const { ref: revealCitation, inView: myCitationIsVisible } = useInView();
    const { ref: myCompetences, inView: myCompetencesAreVisible } = useInView();
    const { ref: myPortfolio, inView: myPortfolioIsVisible } = useInView();
    const text = `"Un bon programmeur est quelqu’un qui regarde toujours des deux côtés avant de traverser une rue à sens unique." - Doug Linder, historien et développeur`
    const citation = useTypingEffect(text, 30)

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
                <div ref={myPresentation} className={`${'section section-blanche'} ${'reveal'} ${myPresentationIsVisible ? 'reveal-visible' : ''}`}>
                    <h2>À propos de moi</h2>
                    <img
                        src={Profile2}
                        alt="Rafik Ben Sadi en train de travailler"
                        ref={myPicture} className={`${'col-contenu image-shadow'} ${'reveal-picture'} ${myPictureIsVisible ? 'reveal-picture-visible' : ''}`}
                    />
                    <div className="col-contenu float-right">
                        <div className="texte-avec-ligne-verticale">
                            <p className="texte-profile-description">
                                Développeur fullstack curieux, autodidacte et
                                passionné par les technologies numériques depuis
                                l'enfance, j'ai fait mes premières armes en
                                programmation à 10 ans en apprenant par moi-même
                                les bases du <strong>langage C</strong> grâce à des ouvrages
                                dénichés dans la bibliothèque paternelle. Après
                                un parcours universitaire d'historien-chercheur,
                                j'ai décidé de me reconvertir dans le
                                développement informatique en suivant des cours
                                sur le <strong>langage Python</strong> sur
                                Udemy.com. Enfin, je me suis spécialisé dans le
                                développement Web en suivant le parcours
                                diplomant d'<strong>OpenClassrooms.com</strong> (anciennement
                                Site du Zéro). <br />
                                Au fil de mon parcours dans le développement,
                                j'ai réalisé de nombreux projets très divers :
                                des programmes simples en mode console, par
                                exemple le <strong>Jeu de Maths</strong> pour les écoliers
                                ayant besoin de réviser leurs maths avant un
                                contrôle. J'ai également réalisé des programmes
                                plus complexes comme des <strong>logiciels desktop</strong>, à
                                l'image de <strong>MrBeat</strong>, une boîte à rythmes
                                digitale, ou de <strong>Galaxy</strong>, un jeu vidéo de
                                parcours d'un vaisseau spatial en 3D
                                isométrique. Enfin, j'ai réalisé un certain
                                nombre de <strong>projets Web et Web mobile</strong>, dont vous
                                pouvez avoir <a href='#portfolio'>un aperçu ici</a>.
                            </p>
                            <div className='div-presentation-links'>
                                <Link className='presentation-link' to="https://www.linkedin.com/in/rafikbensadi" target="_blank"
                                rel="noopener noreferrer"><img className='list-icon' src={LinkedIn} alt='Icone LinkedIn'/>Consulter mon profil LinkedIn</Link>
                                <a className='presentation-link' target='_blank' rel='noopener noreferrer' href={CV_File}><img className='list-icon' src={CV_Icon} alt='Icone CV'/>Consulter mon Curriculum Vitae</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* SECTION GRISE 2 */}
                <div className="section section-grise2">
                    <div ref={revealCitation} className={`${'div-citation'} ${'reveal-text'} ${myCitationIsVisible ? 'reveal-text-visible': ''}`}>
                        {citation}
                    </div>
                </div>
                {/* SECTION GRISE 1 */}
                <div className="section section-grise1">
                </div>
                {/* SECTION BLANCHE */}
                <div className="section">
                    <div ref={myCompetences} className={`${'reveal'} ${myCompetencesAreVisible ? 'reveal-visible' : ''}`}>
                        <h2>Mes Compétences</h2>
                        <div className='div-competences-orientation'>
                        <ul>
                            <h3 className='competences-title'>Frontend</h3>
                            <li className='list-item-competence'><img className='list-icon' src={React} alt='Icone ReactJS'/>React JS</li>
                            <li className='list-item-competence'><img className='list-icon' src={TypeScript} alt='Icone Bootstrap'/>TypeScript</li>
                            <li className='list-item-competence'><img className='list-icon' src={JavaScript} alt='Icone JavaScript'/>JavaScript</li>
                            <li className='list-item-competence'><img className='list-icon' src={Html5} alt='Icone HTML5'/>HTML5</li>
                            <li className='list-item-competence'><img className='list-icon' src={Css3} alt='Icone CSS3'/>CSS3</li>
                            {/* <li className='list-item-competence'><img className='list-icon' src={Bootstrap} alt='Icone Bootstrap'/>Bootstrap</li> */}
                            {/* <li className='list-item-competence'><img className='list-icon' src={Tailwind} alt='Icone Tailwind'/>Tailwind</li> */}
                            <li className='list-item-competence'><img className='list-icon' src={Sass} alt='Icone SASS'/>SASS</li>
                            <li className='list-item-competence'><img className='list-icon' src={Figma} alt='Icone Figma'/>Figma</li>
                            <li className='list-item-competence'><img className='list-icon' src={Accessibilité} alt='Icone Accessibilité'/>Accessibilité</li>
                        </ul>
                        <ul>
                            <h3 className='competences-title'>Backend</h3>
                            <li className='list-item-competence'><img className='list-icon' src={SQL} alt='Icone SQL'/>SQL</li>
                            <li className='list-item-competence'><img className='list-icon' src={MongoDB} alt='Icone MongoDB'/>MongoDB</li> 
                            {/* <li className='list-item-competence'><img className='list-icon' src={Django} alt='Icone Django'/>Django</li> */}
                            <li className='list-item-competence'><img className='list-icon' src={NodeJS} alt='Icone NodeJS'/>Node JS</li>
                            <li className='list-item-competence'><img className='list-icon' src={Express} alt='Icone ExpressJS'/>Express JS</li>
                            <li className='list-item-competence'><img className='list-icon' src={SEO} alt='Icone SEO'/>SEO</li>
                            {/* <li className='list-item-competence'><img className='list-icon' src={Security} alt='Icone Cyber-sécurité'/>Sécurité serveur web</li> */}
                            <li className='list-item-competence'><img className='list-icon' src={Api} alt='Icone API'/>API REST</li>
                            <li className='list-item-competence'><img className='list-icon' src={Postman} alt='Icone Postman'/>Postman</li>
                            <li className='list-item-competence'><img className='list-icon' src={Docker} alt='Icone Docker'/>Docker</li>
                        </ul>
                        <ul>
                            <h3 className='competences-title'>Divers</h3>
                            <li className='list-item-competence'><img className='list-icon' src={Git} alt='Icone Git'/>Git</li>
                            <li className='list-item-competence'><img className='list-icon' src={Github} alt='Icone Github'/>Github</li>
                            <li className='list-item-competence'><img className='list-icon' src={Linux} alt='Icone Linux'/>Linux</li>
                            <li className='list-item-competence'><img className='list-icon' src={Windows} alt='Icone Windows'/>Windows</li>
                            <li className='list-item-competence'><img className='list-icon' src={Terminal} alt='Icone Terminal'/>Bash / PowerShell</li>
                            <li className='list-item-competence'><img className='list-icon' src={Python} alt='Icone Python'/>Python</li>
                            <li className='list-item-competence'><img className='list-icon' src={ChatGPT} alt='Icone ChatGPT'/>ChatGPT</li>
                            {/* <li className='list-item-competence'><img className='list-icon' src={GreenIT} alt='Icone Green IT'/>Green IT</li> */}
                            {/* <li className='list-item-competence'><img className='list-icon' src={PyCharm} alt='Icone PyCharm'/>PyCharm</li> */}
                            <li className='list-item-competence'><img className='list-icon' src={VSC} alt='Icone Visual Studio Code'/>Visual Studio Code</li>
                        </ul>
                    </div>
                </div>
                </div>
                
                {/* SECTION GRISE 2 */}
                <div ref={myPortfolio} className={`${'section section-grise2'}`}>
                    <div className={`${'reveal'} ${myPortfolioIsVisible ? 'reveal-visible' : ''}`}>
                        <h2 id='portfolio'>Portfolio</h2>
                        <div className="projects-cardslist">
                        {projects.map((project) => (
                            <Card key={`${project.id}`} project={project} />
                        ))}
                    </div>
                    </div>
                    
                </div>
                <div className='linear-gradient'></div>
            </main>
        </div>
    )
}

export default Home
