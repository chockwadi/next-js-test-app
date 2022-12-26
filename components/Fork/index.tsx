import Image from "next/image";
import { useEffect, useState } from "react";
import { getGistById } from "../../services/api/gist";
import styles from "./fork.module.scss";

const Fork = (props: any) => {
    const [fork, setFork] = useState<any>({});
    useEffect(() => {
        if (props.gits.id) {
            getForkData(props.gits.id);
        }
    }, [props]);

    const getForkData = async (id: any) => {
        let data = await getGistById(id);
        setFork(data);
    };
    return (
        <>
            <p className={styles.heading}>Fork Users List</p>
            <div className={styles.list}>
                {fork?.forks?.length ? (
                    fork?.forks?.map((item: any, index: number) => {
                        return (
                            <span key={index}>
                                <Image
                                    alt="forkimg"
                                    className={styles.fork_img}
                                    width={50}
                                    height={50}
                                    src={item.user.avatar_url}
                                />
                            </span>
                        );
                    })
                ) : (
                    <div className={styles.notfound}>No Fork Users found</div>
                )}
            </div>
        </>
    );
};
export default Fork;
