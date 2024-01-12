import React, { useRef } from "react";
import { SpotLight, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

export const PintLightsHelper = () => {
  const ref = useRef();
  // const helper = useHelper(ref, THREE.PointLightHelper, 0.5, "red");
  const {
    color,
    decay,
    intensity,
    attenuation,
    angle,
    positionX,
    positionY,
    positionZ,
  } = useControls({
    color: "white",
    distance: 3,
    attenuation: 10,
    angle: 0.15,
    decay: 2,
    positionX: {
      value: 4,
      step: 0.1,
    },
    positionY: {
      value: 3.5,
      step: 0.1,
    },
    positionZ: {
      value: -1.5,
      step: 0.1,
    },
    intensity: 10,
  });

  return (
    <>
      <pointLight
        ref={ref}
        color={color}
        angle={angle}
        intensity={intensity}
        decay={decay}
        attenuation={attenuation}
        position={[positionX, positionY, positionZ]}
        castShadow
      />
      {/* <pointLight
        ref={ref}
        color={"white"}
        // angle={angle}
        intensity={1.5}
        decay={1}
        position={[0, 0, 0]}
        castShadow
      /> */}
    </>
  );
};
