import React from "react";
import Button from "../Button/Button";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import searchBarStyle from  "./SearchBar.module.css";
const SearchBar = ({placeholder}) => {

  const onSubmit =(e)=>{
    e.preventDefault();
  }

  return (
    <form className= {searchBarStyle.searchBarWrapper} onSubmit={onSubmit}>
      <input
        type="search"
        className={searchBarStyle.searchBar}
        placeholder={placeholder}
        required
      />
      <Button className={searchBarStyle.searchIcon} type="submit">
        <SearchIcon />
      </Button>
    </form>
  );
};

export default SearchBar;
