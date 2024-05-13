import React from "react";
import NavBar from "../components/NavBar/NavBar";
import ListContainer from "../components/ListContainer/ListContainer";
import "./style.css";

const Home = () => {
  return(
    <>
        <NavBar />
        <div className="main-container">
            <div className="search-container">
                <div className="search-input">
                    <input type="text" placeholder="Search Colors"/>
                    <img src="search-icon.png" alt="search-icon"/>
                </div>
            </div>
            <ListContainer />
        </div>
    </>
  )
};

export { Home };
