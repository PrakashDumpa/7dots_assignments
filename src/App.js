import "./App.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const totalSeconds = 180;
  const [time, setTime] = useState(totalSeconds);
  const [isStop, setIsStop] = useState(true);

  useEffect(() => {
    if (time === 0) return;
    let interval;
    if (isStop) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStop, time]);

  const onClickDecrease = () => {
    if (time > 10) {
      setTime((prev) => prev - 10);
    }
  };

  const onClickIncrease = () => {
    if (time <= totalSeconds - 10) setTime((prev) => prev + 10);
  };

  const minutes = Math.floor(time / 60);
  const remainingSeconds = time % 60;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div>
        <CircularProgressbar
          value={time}
          maxValue={totalSeconds}
          text={`${String(minutes).padStart(2, 0)} :
        ${String(remainingSeconds).padStart(2, 0)}`}
        />
      </div>
      {/* <h1>
        {String(minutes).padStart(2, 0)} :
        {String(remainingSeconds).padStart(2, 0)}
      </h1> */}
      <div className="w-50 mt-3 d-flex justify-content-around">
        <button
          type="btn"
          className="btn btn-primary px-5"
          onClick={onClickDecrease}
        >
          -
        </button>
        <button
          type="btn"
          className="btn btn-success px-5"
          onClick={onClickIncrease}
        >
          +
        </button>
        <button
          type="btn"
          className="btn btn-danger px-4"
          onClick={() => setIsStop((prev) => !prev)}
        >
          pause
        </button>
      </div>
    </div>
  );
};

export default App;
