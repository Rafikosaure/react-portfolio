import '../Styles/CommonStyles.scss'
import Profile2 from '../Images/profile2.webp'
import LinkedIn from '../Images/linkedin.svg'
import CV_Icon from '../Images/cv.png'
import GithubIcon from '../Images/github.svg'
import CV_File from '../CV/CV_BenSadi_Rafik.pdf'
import Card from '../Components/Card'
import projects from '../Data/projects.json'
import skills from '../Data/skills.json'
import SkillsList from '../Components/SkillsList'
import { useTypingEffect } from '../Hooks/Typing-effect'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

function Home() {
    const { ref: revealCitation, inView: myCitationIsVisible } = useInView();
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
                <div className='section section-blanche'>
                    <h2>À propos de moi</h2>
                    <img
                        src={Profile2}
                        alt="Rafik Ben Sadi en train de travailler"
                        className='col-contenu image-shadow'
                    />
                    <div className="col-contenu float-right">
                        <div className="texte-avec-ligne-verticale">
                            <p className="texte-profile-description">
                            Développeur fullstack curieux et autodidacte, je me passionne pour les technologies numériques depuis l’enfance. <strong>À 10 ans, j’apprenais les bases du C</strong> grâce à des ouvrages trouvés dans la bibliothèque paternelle. Après un parcours universitaire en histoire et une première immersion dans <strong>le langage Python</strong> via Udemy, j’ai choisi de me spécialiser dans le <strong>développement Web</strong> en suivant le parcours diplômant <strong>d’OpenClassrooms</strong>, avant d’obtenir le titre de <strong>concepteur-développeur d’applications</strong> chez SIELI. J’ai également approfondi mes compétences en <strong>gestion de projet en IA</strong> avec 26 Academy.<br />
                            Au fil des années, j’ai mené des projets variés : des applications console comme un <strong>Jeu de Maths</strong> pour écoliers, des logiciels desktop comme <strong>MrBeat, une boîte à rythmes digitale</strong>, ou <strong>Galaxy, un jeu de course en 3D</strong>. J’ai aussi conçu de nombreuses <strong>applications Web et Web mobile</strong>, dont vous trouverez <a href='#portfolio'>un aperçu ici</a>.
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

                    <h2 className='div-competences-main-title'>Mes Compétences</h2>

                    <SkillsList data={skills[0]} animDirection='reverse' />
                    <SkillsList data={skills[1]} animDirection='normal' />
                    <SkillsList data={skills[2]} animDirection='reverse' />
                    <SkillsList data={skills[3]} animDirection='normal' />
                    <SkillsList data={skills[4]} animDirection='reverse' />
                    <SkillsList data={skills[5]} animDirection='normal' />
                    <SkillsList data={skills[6]} animDirection='reverse' />
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
