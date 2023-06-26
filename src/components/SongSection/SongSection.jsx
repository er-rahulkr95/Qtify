import React, { useEffect, useState } from "react";
import SongsGenreTab from "../SongsGenreTab/SongsGenreTab";
import styles from "./SongSection.module.css";
const SongSection = ({
  songsData,
  genresList,
  type,
  value,
  handleChange,
  title,
  allSongs,
  setFilteredSong,
}) => {
  return (
    <div>
      <div>
        <h3 className={styles.sectionTitle}>{title}</h3>
      </div>
      <SongsGenreTab
        genresList={genresList}
        songsData={songsData}
        type={type}
        value={value}
        setFilteredSong={setFilteredSong}
        handleChange={handleChange}
        allSongs={allSongs}
      />
    </div>
  );
};

export default SongSection;
