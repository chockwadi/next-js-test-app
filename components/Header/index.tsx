import styles from './header.module.scss';

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>Frontend Take Home Test </h1>
            </div>
        </>
    )
}

export default Header;