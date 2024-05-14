import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { ListContainer } from "../components/ListContainer/ListContainer";
import "./style.css";
import { findColorByText } from "../utility/color-finder";

const Home = () => {
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState([]);
  const [dominantColor, setDominantColor] = useState("#436e60")

  const onColorSearch = () => {
    // Find color list from the data and update both color lst and navbar colro

    // Font color will automatically update based on contrast

    if (!color.trim().length) {
      return;
    }

    const result = findColorByText(color);

    if(!result.length) {
      return
    }

    setColorList(result);
    setDominantColor(result[0].obj ? result[0].obj.hex : result[0].hex)
  };

  return (
    <>
      <NavBar color={dominantColor}/>
      <div className="main-container">
        <div className="search-container">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search Colors"
              value={color}
              onChange={(event) => setColor(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  onColorSearch();
                }
              }}
            />
            <button>
              <img src="search-icon.png" alt="search-icon" />
            </button>
          </div>
        </div>
        <ListContainer data={colorList} />
      </div>
    </>
  );
};

export { Home };
