import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

const Light = ({ position, intensity, color, castShadow, ref }) => {
  return (
    <directionalLight
      castShadow={castShadow}
      position={position}
      intensity={intensity}
      color={color}
      ref={ref}
    />
  );
};

export const GroupingLight = () => {
  const mainLightRef = useRef();
  const additionalLight1Ref = useRef();
  const additionalLight2Ref = useRef();
  const shadowCameraHelperRef = useRef();
  const { scene, target } = useThree();

  // Shared position control for all lights
  const { position, color, intensity } = useControls({
    position: { value: [-20, 100, -150] },
    color: "#ccc",
    intensity: 4,
  });

  useEffect(() => {
    if (mainLightRef.current) {
      const mainLight = mainLightRef.current;
      mainLight.position.set(...position);
      mainLight.target = target;

      // Check if the light has a shadow property before creating the helper
      if (mainLight.shadow) {
        // Remove the existing shadow camera helper if it exists
        if (shadowCameraHelperRef.current) {
          scene.remove(shadowCameraHelperRef.current);
        }

        // Create a helper for the shadow camera of the main light
        const mainLightShadowCameraHelper = new THREE.CameraHelper(
          mainLight.shadow.camera
        );
        shadowCameraHelperRef.current = mainLightShadowCameraHelper;
        scene.add(mainLightShadowCameraHelper);
      }
    }

    if (additionalLight1Ref.current) {
      const additionalLight1 = additionalLight1Ref.current;
      additionalLight1.position.set(
        position[0] - 57,
        position[1] - 88,
        position[2] + 200
      );
      additionalLight1.intensity = 0.5;
      additionalLight1.color = new THREE.Color("white");
    }

    if (additionalLight2Ref.current) {
      const additionalLight2 = additionalLight2Ref.current;
      additionalLight2.position.set(
        position[0] + 120,
        position[1] - 60,
        position[2] + 400
      );
      additionalLight2.intensity = 0.5;
      additionalLight2.color = new THREE.Color("#ccc");
      additionalLight2.target = target;
    }
  }, [position, scene, target]);

  useFrame(() => {
    if (mainLightRef.current) {
      const mainLight = mainLightRef.current;

      // Update shadow camera for the main light
      if (mainLight.shadow) {
        mainLight.shadow.camera.left = -200;
        mainLight.shadow.camera.right = 200;
        mainLight.shadow.camera.top = 100;
        mainLight.shadow.camera.bottom = -100;
        mainLight.shadow.camera.near = 0.1;
        mainLight.shadow.camera.far = 500;
        mainLight.shadow.mapSize.width = 1024;
        mainLight.shadow.mapSize.height = 1024;
      }
    }
  });

  return (
    <>
      {/* Main Light */}
      <Light
        position={position}
        intensity={intensity}
        color={color}
        castShadow
        ref={mainLightRef}
      />

      {/* Additional Lights */}
      <Light
        position={[position[0] - 57, position[1] - 88, position[2] + 200]}
        intensity={0.5}
        color={"white"}
        ref={additionalLight1Ref}
      />
      <Light
        position={[position[0] + 120, position[1] - 60, position[2] + 400]}
        intensity={0.5}
        color={"#ccc"}
        castShadow
        ref={additionalLight2Ref}
      />
    </>
  );
};
