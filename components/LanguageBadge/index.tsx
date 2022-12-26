import { useEffect, useState } from "react";
import styles from "./languagebadge.module.scss";

const LanguageBadge = ({ files }: any) => {
    const [languages, setLanguages] = useState<any[]>([]);
    useEffect(() => {
        setLanguages(
            Object.values(files).filter(
                (item1: any, i, arr2) =>
                    arr2.findIndex((item2: any) => item1.language === item2.language) ===
                    i
            )
        );
    }, [JSON.stringify(files)]);
    return (
        <div className={styles.badge_container}>
            {languages?.map((file: any, index: number) => (
                <span key={index}>{file.language}</span>
            ))}
        </div>
    );
};

export default LanguageBadge;
