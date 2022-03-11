import React, { useEffect, useState } from "react";
import "./App.css";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const App = () => {
  const [clickedFirst, setClickedFirst] = useState(false);
  const [clickedSecond, setClickedSecond] = useState(false);
  const [clickedThird, setClickedThird] = useState(false);
  const [clickedFourth, setClickedFourth] = useState(false);
  const [clickedFifth, setClickedFifth] = useState(false);

  return (
    <div className="App">
      <h1>STAR RATING</h1>
      {clickedFirst ? (
        <a onClick={() => setClickedFirst(false)}>
          <FontAwesomeIcon icon={faSolidStar} />
        </a>
      ) : (
        <a onClick={() => setClickedFirst(true)}>
          <FontAwesomeIcon icon={faStar} />
        </a>
      )}
      {clickedSecond ? (
        <a onClick={() => setClickedSecond(false)}>
          <FontAwesomeIcon icon={faSolidStar} />
        </a>
      ) : (
        <a onClick={() => setClickedSecond(true)}>
          <FontAwesomeIcon icon={faStar} />
        </a>
      )}
      {clickedThird ? (
        <a onClick={() => setClickedThird(false)}>
          <FontAwesomeIcon icon={faSolidStar} />
        </a>
      ) : (
        <a onClick={() => setClickedThird(true)}>
          <FontAwesomeIcon icon={faStar} />
        </a>
      )}
      {clickedFourth ? (
        <a onClick={() => setClickedFourth(false)}>
          <FontAwesomeIcon icon={faSolidStar} />
        </a>
      ) : (
        <a onClick={() => setClickedFourth(true)}>
          <FontAwesomeIcon icon={faStar} />
        </a>
      )}
      {clickedFifth ? (
        <a onClick={() => setClickedFifth(false)}>
          <FontAwesomeIcon icon={faSolidStar} />
        </a>
      ) : (
        <a onClick={() => setClickedFifth(true)}>
          <FontAwesomeIcon icon={faStar} />
        </a>
      )}
    </div>
  );
};

export default App;
