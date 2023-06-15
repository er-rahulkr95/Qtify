import React from "react";
import Button from "../Button/Button";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import searchBarStyle from  "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className= {searchBarStyle.searchBarWrapper}>
      <input
        type="search"
        className={searchBarStyle.searchBar}
        placeholder="Search an album of your choice"
      />
      <Button className={searchBarStyle.searchIcon}>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchBar;
