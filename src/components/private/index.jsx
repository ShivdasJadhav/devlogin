import React from "react";
import Articles from "./Articles";
import Header from "./Header";
export default function index(props) {
  return (
    <>
      <Header setLogin={props.setLogin} />
      <Articles />
    </>
  );
}
