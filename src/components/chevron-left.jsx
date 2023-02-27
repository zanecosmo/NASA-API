import React from "react";
import styles from "../Styles.module.css";

const ChevronLeft = (props) => {
    const { calculateDate } = props;

    return (
        <div className={styles["chevron"]} onClick={(_e) => calculateDate(-1)}>
            <svg
            viewBox="0 0 384 512"
            height="13px"
            width="13px"
            >
                <path
                    fill="#515151"
                    d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                />
            </svg>
        </div>
    )
};

export default ChevronLeft;