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
import PyCharm from '../Images/pycharm.png'
import Python from '../Images/python.svg'
import React from '../Images/react.png'
import SQL from '../Images/sql.png'
import VSC from '../Images/vsc.svg'
import Windows from '../Images/windows.png'
import LinkedIn from '../Images/linkedin.svg'
import CV_Icon from '../Images/cv.png'
import Sass from '../Images/sass.svg'
import Github from '../Images/github.svg'
import Figma from '../Images/figma.svg'
import Git from '../Images/git.png'
import Bootstrap from '../Images/bootstrap.svg'
import Docker from '../Images/docker.svg'
import ChatGPT from '../Images/chatgpt.svg'
import GreenIT from '../Images/greenit.png'
import Accessibilité from '../Images/accessibilité.png'
import TypeScript from '../Images/typescript.png'
import Tailwind from '../Images/tailwind.svg'
import Terminal from '../Images/console.png'
import Postman from '../Images/postman.png'
import SEO from '../Images/SEO.png'
import Security from '../Images/cyber-securite.png'
import Webflow from '../Images/webflow.svg'
import LinuxServer from '../Images/serveur_linux.png'
// import DevOps from '../Images/devops.png'
import Redux from '../Images/redux.svg'
import Architecture from '../Images/architecture_logicielle.png'
// import CloudComputing from '../Images/cloud_computing.png'
import UML from '../Images/uml.png'
// import ManageProject from '../Images/gestion_projet.png'
import GithubIcon from '../Images/github.svg'
import MySQL from '../Images/mysql.svg'
import AWS from '../Images/aws.svg'
import Jenkins from '../Images/jenkins.svg'
import GitHubActions from '../Images/github_actions.svg'
import Agile from '../Images/agile.png'
import Waterfall from '../Images/waterfall.webp'
import Trello from '../Images/trello.svg'
import TeamGantt from '../Images/teamgantt.png'
import Jest from '../Images/jest.png'
import Culture from '../Images/culture.png'
import Marketing from '../Images/marketing_digital.png'
import ResponsiveDesign from '../Images/responsive_design.png'
import Vercel from '../Images/vercel.svg'
import CV_File from '../CV/CV_BenSadi_Rafik.pdf'
import Card from '../Components/Card'
import projects from '../Datas/projects.json'
import { useTypingEffect } from '../Hooks/Typing-effect'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

function Home() {
    // const { ref: myPresentation, inView: myPresentationIsVisible } = useInView();
    // const { ref: myPicture, inView: myPictureIsVisible } = useInView();
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
                {/* SECTION BLANCHE 1 */}
                {/* <div className='section section-blanche' ref={myPresentation} className={`${'section section-blanche'} ${'reveal'} ${myPresentationIsVisible ? 'reveal-visible' : ''}`}> */}
                <div className='section section-blanche'>
                    <h2>À propos de moi</h2>
                    <img
                        src={Profile2}
                        alt="Rafik Ben Sadi en train de travailler"
                        // ref={myPicture} className={`${'col-contenu image-shadow'} ${'reveal-picture'} ${myPictureIsVisible ? 'reveal-picture-visible' : ''}`}
                        className='col-contenu image-shadow'
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
                                Udemy.com. Ayant finalement décidé de me spécialiser dans le <strong>développement Web</strong>, j'ai suivi le parcours
                                diplomant d'<strong>OpenClassrooms.com</strong> (anciennement
                                Site du Zéro) avant de passer le titre professionnel 
                                de <strong>concepteur-développeur d'applications</strong> au sein de SIELI.<br />
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
                                <Link className='presentation-link' to="https://github.com/Rafikosaure" target="_blank"><img className='list-icon' src={GithubIcon} alt="Icone Github" />Consulter mon compte Github</Link>
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
                {/* SECTION GRISE 3 */}
                <div className="section section-grise1">
                </div>
                {/* SECTION BLANCHE 2 */}
                <div className="section section-top">
                    <div ref={myCompetences} className={`${'reveal'} ${myCompetencesAreVisible ? 'reveal-visible' : ''}`}>
                        <h2 className='div-competences-main-title'>Mes Compétences</h2>
                        <div className='div-competences-orientation'>
                            <ul className='unordered-list-competences'>
                                <h3 className='competences-title'>UI-UX Design</h3>
                                <li className='list-item-competence'><img className='list-icon' src={Culture} alt='Icone Culture'/>Culture numérique</li>
                                <li className='list-item-competence'><img className='list-icon' src={Figma} alt='Icone Figma'/>Figma</li>
                                <li className='list-item-competence'><img className='list-icon' src={ResponsiveDesign} alt='Icone Responsive design'/>Responsive design</li>
                                <li className='list-item-competence'><img className='list-icon' src={Accessibilité} alt='Icone Accessibilité'/>Accessibilité</li>
                                <li className='list-item-competence'><img className='list-icon' src={Webflow} alt='Icone Webflow'/>Webflow</li>
                                <li className='list-item-competence'><img className='list-icon' src={SEO} alt='Icone SEO'/>SEO</li>
                                <li className='list-item-competence'><img className='list-icon' src={Marketing} alt='Icone Marketing digital'/>Marketing digital</li>
                            </ul>
                            <ul className='unordered-list-competences'>
                                <h3 className='competences-title'>Frontend</h3>
                                <li className='list-item-competence'><img className='list-icon' src={React} alt='Icone ReactJS'/>React JS</li>
                                <li className='list-item-competence'><img className='list-icon' src={Redux} alt='Icone Redux'/>Redux</li>
                                <li className='list-item-competence'><img className='list-icon' src={TypeScript} alt='Icone TypeScript'/>TypeScript</li>
                                <li className='list-item-competence'><img className='list-icon' src={JavaScript} alt='Icone JavaScript'/>JavaScript</li>
                                <li className='list-item-competence'><img className='list-icon' src={Html5} alt='Icone HTML5'/>HTML5</li>
                                <li className='list-item-competence'><img className='list-icon' src={Css3} alt='Icone CSS3'/>CSS3</li>
                                <li className='list-item-competence'><img className='list-icon' src={Bootstrap} alt='Icone Bootstrap'/>Bootstrap</li>
                                <li className='list-item-competence'><img className='list-icon' src={Tailwind} alt='Icone Tailwind'/>Tailwind</li>
                                <li className='list-item-competence'><img className='list-icon' src={Sass} alt='Icone SASS'/>SASS</li>
                            </ul>
                            <ul className='unordered-list-competences'>
                                <h3 className='competences-title'>Backend</h3>
                                <li className='list-item-competence'><img className='list-icon' src={MySQL} alt='Icone MySQL'/>MySQL</li>
                                <li className='list-item-competence'><img className='list-icon' src={MongoDB} alt='Icone MongoDB'/>MongoDB</li> 
                                {/* <li className='list-item-competence'><img className='list-icon' src={Django} alt='Icone Django'/>Django</li> */}
                                <li className='list-item-competence'><img className='list-icon' src={NodeJS} alt='Icone NodeJS'/>Node JS</li>
                                <li className='list-item-competence'><img className='list-icon' src={Express} alt='Icone ExpressJS'/>Express JS</li>
                                 <li className='list-item-competence'><img className='list-icon' src={Security} alt='Icone Cyber-sécurité'/>Cyber-sécurité</li>
                                <li className='list-item-competence'><img className='list-icon' src={Api} alt='Icone API'/>API REST</li>
                                <li className='list-item-competence'><img className='list-icon' src={Postman} alt='Icone Postman'/>Postman</li>
                                
                                {/* <li className='list-item-competence'><img className='list-icon' src={DevOps} alt='Icone DevOps'/>DevOps</li> */}
                            </ul>
                            <ul className='unordered-list-competences'>
                                <h3 className='competences-title'>Gestion de projet digital</h3>
                                <li className='list-item-competence'><img className='list-icon' src={Architecture} alt='Icone Architecture logicielle'/>Architecture logicielle</li>
                                <li className='list-item-competence'><img className='list-icon' src={UML} alt='Icone UML'/>UML / Merise</li>
                                <li className='list-item-competence'><img className='list-icon' src={Trello} alt='Icone Trello'/>Trello</li>
                                <li className='list-item-competence'><img className='list-icon' src={TeamGantt} alt='Icone TeamGantt'/>TeamGantt</li>
                                <li className='list-item-competence'><img className='list-icon' src={GreenIT} alt='Icone Green IT'/>Green IT</li>
                                <li className='list-item-competence'><img className='list-icon' src={Agile} alt='Icone agile'/>Méthodologies Agiles</li>
                                <li className='list-item-competence'><img className='list-icon' src={Waterfall} alt='Icone waterfall'/>Méthode en Cascade</li>
                            </ul>
                            <ul className='unordered-list-competences'>
                                <h3 className='competences-title'>DevOps</h3>
                                <li className='list-item-competence'><img className='list-icon' src={Git} alt='Icone Git'/>Git</li>
                                <li className='list-item-competence'><img className='list-icon' src={Github} alt='Icone Github'/>Github</li>
                                <li className='list-item-competence'><img className='list-icon' src={Docker} alt='Icone Docker'/>Docker</li>
                                <li className='list-item-competence'><img className='list-icon' src={Terminal} alt='Icone Terminal'/>Bash / PowerShell</li>
                                <li className='list-item-competence'><img className='list-icon' src={Jest} alt='Icone Jest'/>Jest</li>
                                <li className='list-item-competence'><img className='list-icon' src={GitHubActions} alt='Icone Github Actions'/>Github Actions</li>
                                <li className='list-item-competence'><img className='list-icon' src={Jenkins} alt='Icone Jenkins'/>Jenkins</li>
                                <li className='list-item-competence'><img className='list-icon' src={LinuxServer} alt='Icone Serveurs Linux'/>Serveurs Linux</li>
                                <li className='list-item-competence'><img className='list-icon' src={Vercel} alt='Icone AWS'/>Vercel</li>
                                <li className='list-item-competence'><img className='list-icon' src={AWS} alt='Icone AWS'/>Cloud AWS</li>
                            </ul>
                            <ul className='unordered-list-competences'>
                                <h3 className='competences-title'>Side skills</h3>
                                <li className='list-item-competence'><img className='list-icon' src={Python} alt='Icone Python'/>Python</li>
                                <li className='list-item-competence'><img className='list-icon' src={SQL} alt='Icone SQL'/>SQL</li>
                                <li className='list-item-competence'><img className='list-icon' src={ChatGPT} alt='Icone ChatGPT'/>ChatGPT</li>
                                <li className='list-item-competence'><img className='list-icon' src={Linux} alt='Icone Linux OS'/>Linux OS</li>
                                <li className='list-item-competence'><img className='list-icon' src={Windows} alt='Icone Windows'/>Windows OS</li>
                                <li className='list-item-competence'><img className='list-icon' src={PyCharm} alt='Icone PyCharm'/>PyCharm</li>
                                <li className='list-item-competence'><img className='list-icon' src={VSC} alt='Icone Visual Studio Code'/>Visual Studio Code</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* SECTION GRISE 4 */}
                <div ref={myPortfolio} className={`${'section section-grise2 section-top'}`}>
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
