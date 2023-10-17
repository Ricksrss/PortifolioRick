import styles from './Presentation.module.css'

function Presentation() {
    return (
        <div className={styles.presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá eu sou o Henrique Soares!</h1>
            <p>Estou migrando de carreira e indo para área de programação,<br/>
                 estudando para ser programador full-stack.<br/>
                 Estou construindo minha carreira aos poucos sempre <br/>
                 visando o crescimento profissional e pessoal.<br/>
                 Atualmente estou estudando Analise e Desenvolvimento de<br/>
                 Sistemas mas me formo em breve.</p>
        </div>
    )
}

export default Presentation