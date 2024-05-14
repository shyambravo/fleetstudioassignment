import fuzzysort from "fuzzysort";
import colorList from "./color-list.json";

const hexToRGB = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ];
};

const findTextColorByContrast = (hex) => {
  const rgb = hexToRGB(hex);

  const contrast = Math.round(
    (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
      1000
  );
  const textColour = contrast > 125 ? "black" : "white";

  return textColour;
};

const findColorByText = (str) => {
  const results = fuzzysort.go(str, structuredClone(colorList), {
    key: "name",
    threshold: -10,
  });

  return results;
};

export { findColorByText, hexToRGB, findTextColorByContrast };
