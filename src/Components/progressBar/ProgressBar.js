import React, { useEffect, useState } from "react";
import "./progressBar.css";
const ProgressBar = () => {
  const [width, setWidth] = useState(10);
  const [toggle, setToggel] = useState(false);
  useEffect(() => {
    let timer = null;
    if (width < 100 && toggle) {
      timer = setInterval(() => {
        setWidth((prev) => prev + 1);
      }, 100);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [width, toggle]);
  const handleToggel = () => {
    setToggel((prev) => !prev);
  };
  return (
    <>
      <div className="container">
        <div className="progress-bar" style={{ width: `${width}%` }}>
          {width}%
        </div>
      </div>
      <button onClick={handleToggel} disabled={toggle}>
        Start
      </button>
      <button onClick={handleToggel} disabled={!toggle}>
        Stop
      </button>
    </>
  );
};

export default ProgressBar;
