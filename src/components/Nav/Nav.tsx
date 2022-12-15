import styles from "./Nav.module.css";
import classnames from "classnames";

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <a  className={classnames(styles.active, styles.homeIcon)} href="">Pagina Principal</a>
                </li>
                <li>
                    <a href="" className={styles.newIcon}>Abrir Novo Ticket</a>
                </li>
                <li>
                    <a href="" className={styles.statusIcon}>Verificar Status do Ticket</a>
                </li>
            </ul>
        </nav>
    );
}
