import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'


function Footer() {
    return (
        <div className = {styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/ricksrs/'><FaInstagram size={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/henrique-soares-719819232/'><FaLinkedin size={30} /></a></li>
                <li><a href='https://github.com/Ricksrss'><FaGithub size={30} /></a></li>
            </ul>
            <p>henrique.hsoares@gmail.com</p>
            <p>Henrique Soares © 2023</p>
        </div>
    )
}

export default Footer