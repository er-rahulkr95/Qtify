import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import navBarStyle from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {
  return (
    <nav className={navBarStyle.navBar}>
      <Logo />
      <SearchBar placeholder="Search an album of your choice"/>
      <Button
        className={`${navBarStyle.feedBackButton} ${navBarStyle.feedBackText}`}
      >
        Give Feedback
      </Button>
    </nav>
  );
};

export default NavBar;
