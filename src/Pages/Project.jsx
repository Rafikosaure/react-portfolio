import '../Styles/Styles.scss'
import Projects from '../Datas/projects.json'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

function Project() {
    const { projectId } = useParams()
    const currentDatas = Projects.find((project) => project.id === projectId)
    const { ref: myProject, inView: myProjectIsVisible } = useInView();

    return (
        <div>
            {/* SECTION GRISE TITRE */}
            <div className="section section-grise1 project-section" style={{ paddingTop: 20 }}>
                <a className="portfolio-back" href="/">
                    Retour
                </a>
                <div className="separateur" style={{ marginTop: '-12px' }} />
                <h1 className="portfolio">Portfolio</h1>
                <h2 className="portfolio">{currentDatas.title}</h2>
            </div>
            {/* SECTION CONTENU */}
            <div ref={myProject} className={`${'section'} ${'reveal'} ${myProjectIsVisible ? 'reveal-visible' : ''}`}>
                <div className="texte-avec-ligne-verticale">
                    {currentDatas.description}
                    <br />
                    <br />
                    <u>Technologies utilisées</u> :{' '}
                    <b>{currentDatas.technologies}</b>
                </div>
                <div style={{ textAlign: 'center', marginTop: 30 }}>
                    {currentDatas.urlSite !== "#" ? (
                        <div>
                            <Link
                                to={currentDatas.urlSite}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="portfolio image-bordered image-shadow"
                                    alt="Couverture de projet"
                                    src={`/${currentDatas.cover}`}
                                />
                            </Link>
                            <Link
                                style={{ display: 'block', marginTop: 8 }}
                                to={currentDatas.urlSite}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Voir le site
                            </Link>
                        </div>
                    ) : (
                        
                        <img
                            className="portfolio image-bordered image-shadow"
                            alt="Couverture de projet"
                            src={`/${currentDatas.cover}`}
                        />
                    
                    )}
                    
                    <Link
                        style={{ display: 'block', marginTop: 8 }}
                        to={currentDatas.urlRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Consulter le code du projet
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Project
