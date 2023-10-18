import React, { useEffect, useState } from 'react';
import styles from './Presentation.module.css';
import ButtonA from './elements/ButtonA';

function Presentation() {
    const [text, setText] = useState('');
    const phrasesToRotate = ['Henrique Soares!', 'Desenvolvedor Full Stack!'];
    const [loopCount, setLoopCount] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100;
    const [typingDelay, setTypingDelay] = useState(100);

    useEffect(() => {
        let ticker = setInterval(() => {
            typeText();
        }, typingDelay);
        return () => {
            clearInterval(ticker);
        };
    }, [text, loopCount, typingDelay]);

    const typeText = () => {
        const currentPhrase = phrasesToRotate[loopCount % phrasesToRotate.length];
        const updatedText = isDeleting
            ? currentPhrase.substring(0, text.length - 1)
            : currentPhrase.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === currentPhrase) {
            setIsDeleting(true);
            setTypingDelay(typingSpeed);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setTypingDelay(typingSpeed);
            setLoopCount(loopCount + 1);
        }
    };

    return (
        <div className={styles.presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou  {text}</h1>
            <p>Estou migrando de carreira e indo para a área de programação,<br />
                estudando para ser programador full-stack.<br />
                Estou construindo minha carreira aos poucos sempre <br />
                visando o crescimento profissional e pessoal.<br />
                Atualmente estou estudando Análise e Desenvolvimento de<br />
                Sistemas mas me formo em breve.</p>

            <ButtonA link='https://www.linkedin.com/in/henrique-soares-719819232' text='Conecte-se comigo!' />
        </div>
    );
}

export default Presentation;
