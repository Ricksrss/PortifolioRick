import ButtonB from './elements/ButtonB'
import styles from './Projects.module.css'
import Card from './elements/Card'
import ccxp from './image/projects/ccxp.svg'
import portifolio from './image/projects/portifolio.svg'
import bootcamp from './image/projects/bootcamp.svg'
import arquitetura from './image/projects/arquitetura.svg'
import landingpage from './image/projects/landing-page.svg'
import projport from './image/projects/projport.svg'

function Project() {
    return (
        <div className={styles.projects} id="Projects">
            <h1>Projetos </h1>
            <Card
                img={ccxp}
                title="CCXP"
                tech="HTML, CSS E JS"
                description="Desenvolvimento de uma Landing Page para o lançamento da formação em tenologia"
                repo="https://github.com/Ricksrss/DesafioCCXP"
                site="https://ricksrss.github.io/DesafioCCXP/"
            />
            <Card
                img={portifolio}
                title="Portifolio React"
                tech="React"
                description="Desenvolvimento de uma Pagina Pessoal com React"
                repo="https://github.com/Ricksrss/PortifolioRick"
                site="https://ricksrss.github.io/DesafioCCXP/"
            />
            <Card
                img={bootcamp}
                title="BootCamp DNC"
                tech="HTML, CSS"
                description="Projeto de desenvolvimento do modo base do curso de tecnologia da Escola DNC"
                repo="https://github.com/Ricksrss/bootcamp-dnc"
                site="https://bootcampdncc.netlify.app/"
            />
            <Card
                img={arquitetura}
                title="Projeto Arquitetura"
                tech="HTML, CSS"
                description="Projeto de desenvolvimento do modo base do curso de tecnologia da Escola DNC"
                repo="https://github.com/Ricksrss/projeto-arquitetura"
                site="https://projetoarquit.netlify.app/"
            />
            <Card
                img={landingpage}
                title="Projeto Landing-Page"
                tech="HTML, CSS e Javascript"
                description="Projeto de desenvolvimento do modo base do curso de tecnologia da Escola DNC"
                repo="https://github.com/Ricksrss/projeto-lading-page"
                site="https://sitedncteste.netlify.app/"
            />
            <Card
                img={projport}
                title="Projeto Landing-Page"
                tech="HTML, CSS"
                description="Projeto de desenvolvimento do modo base do curso de tecnologia da Escola DNC"
                repo="https://github.com/Ricksrss/projetoportifolio"
                site="https://projetomariaportifolio.netlify.app/"
            />
        </div>
    )
}

export default Project