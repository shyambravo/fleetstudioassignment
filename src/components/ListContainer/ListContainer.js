import React from "react";
import "./style.css";

export default function ListContainer(props) {
  const { data } = props;

  return (
    <div className="list-container">
      <p>Search results for the term "color"</p>

      <div className="color-container">
        {data.map((color) => {
          const height = Math.random() * 100

          return (
            <div
              key={color}
              style={{ backgroundColor: color, minHeight: height }}
              className="card"
            >
              <h3>{color}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
