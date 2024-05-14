import React, { memo } from "react";
import "./style.css";
import { findTextColorByContrast } from "../../utility/color-finder";

const ListContainer = memo((props) => {
  const { data } = props;

  return (
    <div className="list-container">
      <div className="color-container">
        {data.map((color) => {
          // Hgeiht will be set randomly to demonstrate masonry grid

          const height = Math.random() * 500;

          color = color.obj ? color.obj : color;

          const textColor = findTextColorByContrast(color.hex);

          return (
            <div
              key={Math.random() + color.name}
              style={{
                backgroundColor: color.hex,
                minHeight: height,
                color: textColor,
              }}
              className="card"
            >
              <h3>{color.name}</h3>
              <p>{color.hex}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export { ListContainer };
