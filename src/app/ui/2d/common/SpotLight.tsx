import { SpotLight, useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";
export const Light = () => {
  const ref = useRef();
  const target = new THREE.Object3D();
  target.position.set(4, 0, 0.5);
  // const helper = useHelper(ref, THREE.SpotLightHelper, "red");
  // const { color, distance, attenuation, angle, anglePower, position } =
  //   useControls({
  //     color: "white",
  //     distance: 6,
  //     attenuation: 30,
  //     angle: 1,
  //     anglePower: 1,
  //     position: [5, 3, 0.5],
  //   });

  return (
    <>
      <SpotLight
        ref={ref}
        color={"white"}
        distance={10}
        attenuation={10}
        anglePower={1}
        position={[5, 3.5, 0.5]}
        castShadow
        target={target}
      />
    </>
  );
};
