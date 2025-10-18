import React from 'react';
import classImg from "../../../assets/class.png"
import swimmingImg from "../../../assets/swimming.png"
import playGroundImg from "../../../assets/playground.png"

const QZoon = () => {
  return (
    <div className="bg-base-200 p-3">
      <h1 className="font-bold mb-5">QZoon</h1>
      <div>
        <img src={classImg} alt="" />
        <img src={swimmingImg} alt="" />
        <img src={playGroundImg} alt="" />
      </div>
    </div>
  );
};

export default QZoon;