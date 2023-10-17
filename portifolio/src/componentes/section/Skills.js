import styles from './Skills.module.css';
import javascript from './image/skills/javascript.svg';
import html from './image/skills/html.svg';
import css from './image/skills/css.svg';
import react from './image/skills/react.svg';

function Skills() {
    return (
        <div className={styles.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Tecnologias que estou explorando</p>
            <div>
                <img src={javascript} alt="JavaScript" />
                <img src={html} alt="HTML" />
                <img src={css} alt="CSS" />
                <img src={react} alt="React" />
            </div>
        </div>
    );
}

export default Skills;