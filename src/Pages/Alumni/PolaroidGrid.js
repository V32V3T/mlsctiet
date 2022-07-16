import React, { useState } from "react";
import Polaroid from "./Components/Polaroid";
import PolaroidGridCSS from "../Alumni/Styles/PolaroidGrid.module.css";
import Years from "./Components/Years";
import Alumni from "./Components/alumni";
import Lines from "./Assets/lines.png";
import Circles from "./Assets/Circles.svg";

const allYearValues = [
  ...new Set(
    Alumni.map((curElem) => {
      return curElem.year;
    })
  ),
];

const PolaroidGrid = () => {
  const [items, setItems] = useState(Alumni);
  const [yearItems, setYearItems] = useState(allYearValues);
  const filterPolaroids = (years) => {
    const updatedItems = Alumni.filter((curElem) => {
      return curElem.year === years;
    });
    setItems(updatedItems);
  };
  return (
    <div>
      <div className={PolaroidGridCSS.container}>
        <div className={PolaroidGridCSS.mainContainer} id="rectangle">
          <div className={PolaroidGridCSS.firstContainer}>
            <img src={Circles}></img>
            <img src={Lines}></img>
            <h1>{items[0].year}</h1>
          </div>
          {items.map((items, index) => {
            return (
              <div key={index}>
                <Polaroid items={items} />
              </div>
            );
          })}
        </div>
        <div className={PolaroidGridCSS.thirdContainer}>
          <Years filterPolaroids={filterPolaroids} yearItems={yearItems} />
        </div>
      </div>
    </div>
  );
};

export default PolaroidGrid;
