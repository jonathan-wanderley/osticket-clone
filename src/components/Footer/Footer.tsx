import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Copyright © 2022 Suporte Tecnico - Todos os direitos reservados.</p>
            <img src="/poweredby.png" alt="" />
        </footer>
    );
}
