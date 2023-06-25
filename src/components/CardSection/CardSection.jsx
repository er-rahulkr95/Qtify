import React from "react";
import Card from "../Card/Card";
import SongsCard from "../Card/SongsCard";
const CardSection = ({ type, data }) => {
  switch (type) {
    case "album":
      return (
        <>
          <Card data={data} />
        </>
      );
    case "songs":
      return (
        <>
          <SongsCard data={data} />
        </>
      );
    default:
      return <></>;
  }
};

export default CardSection;
