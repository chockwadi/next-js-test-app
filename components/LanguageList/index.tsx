import styles from "./languagelist.module.scss";

const LanguageList = ({ files }: any) => {
    return (
        <>
            <p className={styles.filesnamehead}>Gist Files</p>
            <ul className={styles.list}>
                {Object.keys(files)?.map((file: any, index: number) => (
                    <li key={index}>{file}</li>
                ))}
            </ul>
        </>
    );
};

export default LanguageList