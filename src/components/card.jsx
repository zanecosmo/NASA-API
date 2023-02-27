import styles from "../Styles.module.css";

const Card = (props) => {
    const { media } = props;

    const createMediaElement = () => {
        return (
            media.media_type === "video"
            ? <iframe src={media.url} />
            : <img className={styles["img"]} src={media.url} width="100%"></img>
        );
    };

    return (
        <div className={`${styles["generic"]} ${styles["card"]}`}>
            <div className={styles["title"]}>{media.title}</div>
            {createMediaElement()}
            <div className={styles["explanation"]}>{media.explanation}</div>
        </div>
    );
};

export default Card;