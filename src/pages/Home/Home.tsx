import styles from "./Home.module.css";

export const Home = () => {
    return (
        <div className={styles.content}>
            <div className={styles.text}>
                <h1>Sistema de abertura de chamados</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatibus deleniti minima! Suscipit beatae debitis illo optio, pariatur dignissimos impedit, blanditiis quae omnis tempora amet mollitia commodi aspernatur quo ratione!</p>
            </div>

            <div className={styles.buttons}>
                <a href="" className={styles.abrir}>Abrir novo ticket</a>
                <a href="" className={styles.verificar}>Verificar status do ticket</a>
            </div>
        </div>
    );
}
