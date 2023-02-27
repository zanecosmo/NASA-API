import { useState } from "react";
import ChevronRight from "./chevron-right";
import ChevronLeft from "./chevron-left";
import styles from "../Styles.module.css";
import moment from "moment";

const Toolbar = (props) => {
    const { currentDate, getMedia } = props;

    const [date, setDate] = useState(currentDate);

    const calculateDate = (numberOfDays) => {
        const newDate = moment(date).toDate();
        newDate.setDate(newDate.getDate() + numberOfDays);
        console.log(moment(date).toDate().getDate() + numberOfDays);
        const formattedDate = moment(newDate).format("YYYY-MM-DD");
        console.log(formattedDate);

        getMedia(formattedDate);
        setDate(formattedDate);
    };

    return (
        <div className={`${styles["generic"]} ${styles["toolbar"]}`}>
            <ChevronLeft calculateDate={calculateDate} />
            <div>
                <span>Select Date: </span>
                <input
                    className={styles["date-picker"]}
                    type="date"
                    max={currentDate}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                ></input>
                <div onClick={(_e) => getMedia(date)} className={styles["submit-button"]}>Go</div>
            </div>
            <ChevronRight calculateDate={calculateDate}/>
        </div>
    );
};

export default Toolbar;