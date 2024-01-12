import { Box, useHelper, useTexture } from "@react-three/drei";
import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { CameraFrame } from "./CameraFrame";
export const CameraFrameModel = () => {
  const texture = useTexture("Camera-Snip.jpg");

  const ref = useRef();
  const helper = useHelper(ref, THREE.DirectionalLightHelper, "red");
  const { color, intensity, lightPosition } = useControls({
    color: "white",
    intensity: 4,
    lightPosition: { value: [0, 10, 10], label: "Light Position" },
  });
  useEffect(() => {
    // Update the position of the light when lightPosition changes
    ref.current.position.set(
      lightPosition[0],
      lightPosition[1],
      lightPosition[2]
    );
  }, [lightPosition]);
  const [positionValues, setPositionValues] = useState([0, 0, 0]);
  const { camera, raycaster } = useThree();
  const cameraIconRef = useRef();
  useFrame(({ clock }) => {
    // Update position every 30 seconds
    const elapsedTime = clock.getElapsedTime();
    const positionSpeed = 50 / 30;

    if (elapsedTime <= 30) {
      const newPositionValues = [
        positionSpeed * elapsedTime,
        20 * Math.sin(0.2 * elapsedTime),
        20 * Math.sin(0.3 * elapsedTime),
      ];
      setPositionValues(newPositionValues);
    } else {
      // Reset position after 30 seconds
      setPositionValues([0, 5, 0]);
    }

    // Update the position of the light
    ref.current.position.set(
      positionValues[0],
      positionValues[1],
      positionValues[2]
    );

    // Update the position of the camera
  });

  return (
    <>
      <directionalLight
        ref={ref}
        position={positionValues}
        intensity={intensity}
        color={color}
        castShadow
      />
    </>
  );
};
