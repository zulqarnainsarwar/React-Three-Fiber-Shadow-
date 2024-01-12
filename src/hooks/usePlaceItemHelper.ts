import { useControls } from "leva";
import React, { useState } from "react";
import { degToRad } from "three/src/math/MathUtils.js";

const usePlaceItemHelper = () => {
  const [pos, setPos] = useState([0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale, setScale] = useState([1, 1, 1]);

  useControls("Position", {
    x: {
      value: pos[0],
      onChange: (newValue) => setPos((prev) => [newValue, prev[1], prev[2]]),
    },
    y: {
      value: pos[1],
      onChange: (newValue) => setPos((prev) => [prev[0], newValue, prev[2]]),
    },
    z: {
      value: pos[2],
      onChange: (newValue) => setPos((prev) => [prev[0], prev[1], newValue]),
    },
  });

  useControls("Rotation", {
    x: {
      min: 0,
      max: 360,
      value: rotation[0],
      onChange: (newValue) =>
        setRotation((prev) => [degToRad(newValue), prev[1], prev[2]]),
    },
    y: {
      min: 0,
      max: 360,
      value: rotation[1],
      onChange: (newValue) =>
        setRotation((prev) => [prev[0], degToRad(newValue), prev[2]]),
    },
    z: {
      min: 0,
      max: 360,
      value: rotation[2],
      onChange: (newValue) =>
        setRotation((prev) => [prev[0], prev[1], degToRad(newValue)]),
    },
  });

  useControls("Scale", {
    x: {
      value: scale[0],
      onChange: (newValue) => setScale((prev) => [newValue, prev[1], prev[2]]),
    },
    y: {
      value: scale[1],
      onChange: (newValue) => setScale((prev) => [prev[0], newValue, prev[2]]),
    },
    z: {
      value: scale[2],
      onChange: (newValue) => setScale((prev) => [prev[0], prev[1], newValue]),
    },
  });

  return {
    pos,
    rotation,
    scale,
  };
};

export default usePlaceItemHelper;
