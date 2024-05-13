import React from "react";
import NavBar from "../components/NavBar/NavBar";
import ListContainer from "../components/ListContainer/ListContainer";
import "./style.css";

const Home = () => {
  const mockData = [
    "#8f5656",
    "#568f7e",
    "#2056dc",
    "#5e5720",
    "#56658f",
    "#000000"
  ]

  return(
    <>
        <NavBar />
        <div className="main-container">
            <div className="search-container">
                <div className="search-input">
                    <input type="text" placeholder="Search Colors"/>
                    <button><img src="search-icon.png" alt="search-icon"/></button>
                </div>
            </div>
            <ListContainer data={mockData}/>
        </div>
    </>
  )
};

export { Home };
