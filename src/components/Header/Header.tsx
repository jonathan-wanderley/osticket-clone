import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="Logo" />
            </div>
            <div className={styles.rightArea}>
                <p>
                    {"Usuario nao registrado | "}
                    <a href="/login">Entrar</a>
                </p>
            </div>
        </header>
    );
}
