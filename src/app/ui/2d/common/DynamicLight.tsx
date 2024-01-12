import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useHelper, SpotLight } from "@react-three/drei";
import { SpotLightHelper } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export const DynamicLight = () => {
  const ref = useRef();
  const { camera } = useThree();

  const target = new THREE.Object3D();
  const helper = useHelper(ref, THREE.DirectionalLightHelper, "red");
  const initialPosition = [-20, 100, -150];
  const lightPosition = new THREE.Vector3().fromArray(initialPosition);
  const { color, intensity, Position } = useControls({
    color: "#ccc",
    intensity: 4,
    Position: { value: initialPosition },
  });

  useEffect(() => {
    lightPosition.fromArray(Position);
  }, [Position]);

  useFrame(() => {
    if (ref.current) {
      const light = ref.current;

      // Update light position based on camera position
      light.position.copy(lightPosition);
      light.target = target;

      // Update shadow camera
      light.shadow.camera.left = -200;
      light.shadow.camera.right = 200;
      light.shadow.camera.top = 100;
      light.shadow.camera.bottom = -100;
      light.shadow.camera.near = 0.1;
      light.shadow.camera.far = 300;
      light.shadow.mapSize.width = 1024;
      light.shadow.mapSize.height = 1024;
    }
  });

  return (
    <>
      <directionalLight
        castShadow
        position={lightPosition.toArray()}
        intensity={intensity}
        color={color}
        ref={ref}
      />
    </>
  );
};
