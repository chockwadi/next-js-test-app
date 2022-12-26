import { useState } from "react";
import Fork from "../Fork";
import LanguageBadge from "../LanguageBadge";
import LanguageList from "../LanguageList";
import styles from './gistlist.module.scss';

const GistList = ({ gist }: any) => {
    const [showForkList, setShowForkList] = useState<boolean>(false);
    const enableForUsersList = () => {
        setShowForkList(true);
    };
    return (
        <div className={styles.gist_list_item}>
            <p className={styles.gist_name}>{gist.description}</p>
            <LanguageBadge files={gist.files} />
            <LanguageList files={gist.files} />
            {showForkList ? (
                <Fork gits={gist} />
            ) : (
                <div onClick={enableForUsersList} className={styles.see_fork_users}>
                    {" "}
                    <p>click here to see fork users list</p>{" "}
                </div>
            )}
        </div>
    );
};

export default GistList;