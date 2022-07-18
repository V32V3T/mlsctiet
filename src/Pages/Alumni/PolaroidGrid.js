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
            <div className={PolaroidGridCSS.Circles}>
              <img src={Circles}></img>
            </div>
            <h1>{items[0].year}</h1>
            <img src={Lines}></img>
          </div>
          <div className={PolaroidGridCSS.secondContainer}>
            {items.map((items, index) => {
              return (
                <div key={index} className={PolaroidGridCSS.items}>
                  <Polaroid items={items} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={PolaroidGridCSS.thirdContainer}>
          <Years filterPolaroids={filterPolaroids} yearItems={yearItems} />
        </div>
      </div>
    </div>
  );
};

export default PolaroidGrid;
