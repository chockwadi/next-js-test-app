import { useState } from "react";
import { gistGistListByUserName } from "../../services/api/gist";
import GistList from "../GistList";
import styles from "./home.module.scss";


const Home = () => {
    const [gist, setGist] = useState<any>([]);
    const [username, setUsername] = useState<string>("");
    const onSubmitHandler = async (e: any) => {
        e.preventDefault();
        let data = await gistGistListByUserName(username);
        setGist(data);
    };

    const onChangeHandler = (e: any) => {
        setUsername(e.target.value);
    };

    return (
        <div className={styles.conatiner}>
            <div className={styles.search_container}>
                <form onSubmit={onSubmitHandler}>
                    <div className={styles.search}>
                        <input
                            type="text"
                            onChange={onChangeHandler}
                            value={username}
                            className={styles.search_input}
                            placeholder="type user name here..."
                        />
                        <button type="submit" className={styles.searchButton}>
                            submit
                        </button>
                    </div>
                </form>
            </div>
            <div className={styles.gist_list}>
                {gist.length ? (
                    <>
                        <p className={styles.heading}>Gist List for the user {username}</p>
                        {gist.map((item: any, index: number) => (
                            <GistList gist={item} key={index} />
                        ))}
                    </>
                ) : (
                    <>
                        <div>no data found</div>
                    </>
                )}
            </div>
        </div>
    );
};
export default Home;
