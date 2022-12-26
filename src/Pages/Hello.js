import React, { useContext } from "react";
import "../App.css";

const Hello = ({ data }) => {
  return (
    <div className="home__wrapper">
      Welcome &nbsp; &nbsp; {data?.data?.user?.full_name ?? ""}
    </div>
  );
};

export default Hello;
