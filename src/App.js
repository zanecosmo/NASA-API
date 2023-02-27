import React, { useState, useEffect } from "react";
import moment from "moment";
import './App.css';
import Card from "./components/card";
import Toolbar from "./components/toolbar";
import Navbar from "./components/navbar";
import styles from "./Styles.module.css";

const App = () => {
  const currentDate = moment().format("YYYY-MM-DD");

  const [media, setMedia] = useState({});

  const getMedia = async (date) => {
    const apiKey = "MOhve5aZEfFWsRueJrFdR1hHaJDIzTHhxRXfvVtU";
    const requestDate = date !== undefined ? `&date=${date}` : "";
    const endpPoint = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${requestDate}`;
    const response = await fetch(endpPoint);
    const mediaData = await response.json();

    setMedia(mediaData);
  };

  useEffect(() => void getMedia(), []);

  return (
    <div className={styles["app"]}>
      {/* <div className={styles["background-img"]}></div> */}
      <Navbar />
      <Toolbar currentDate={currentDate} getMedia={getMedia}/>
      <Card media={media}/>
    </div>
  );
}

export default App;
