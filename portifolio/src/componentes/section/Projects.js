import ButtonB from './elements/ButtonB'
import styles from './Projects.module.css'
import Card from './elements/Card'


function Project() {
    return (
        <div className={styles.projects} id="Projects">
            <h1>Projetos </h1>
            <Card/>
            <Card/>
            <Card/>
            <ButtonB text='Acesse meu repositório' link='https://github.com/Ricksrss?tab=repositories' />
        </div>
    )
}

export default Project