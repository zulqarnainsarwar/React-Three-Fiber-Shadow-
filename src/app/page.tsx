// import { ChrismasScene } from "@/app/ui/3d/ChrismasScene";
"use client";
import FpsPlayer from "@/app/ui/3d/FpsPlayer";
import React, { useRef } from "react";
import { SpotLightHelper } from "three";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

import { useControls } from "leva";
import { useHelper, SpotLight, useTexture } from "@react-three/drei";
import { HouseModel } from "./ui/3d/Frames/HouseModel";
import { PintLightsHelper } from "./ui/2d/common/PointLightsHelper";
// import { ImageFrames } from "@/app/ui/3d/Frames/ImageFrames";
import { CityFrameModel } from "./ui/3d/Frames/CityFrame";
import { CityClone } from "./ui/3d/Frames/CityClone";
import { FinalModel } from "./ui/3d/Frames/FinalModel";
import { NinjaMale } from "./ui/3d/Frames/NingaMale";
import { CastModel } from "./ui/2d/common/CastModel";
import { DynamicLight } from "./ui/2d/common/DynamicLight";
import { GroupingLight } from "./ui/2d/common/GroupingLight";
import { BakedCity } from "./ui/2d/common/BakedCity";
function Sphere() {
  const texture = useTexture("terrazo.png");

  const ref = useRef();
  //const helper = useHelper(ref, THREE.SpotLightHelper, "red");
  // const { color } = useControls({
  //   color: "black",
  // });
  return (
    <mesh castShadow position={[0, 2, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        transparent
        roughness={0.1}
        metalness={0.1}
        map={texture}
      />
    </mesh>
  );
}
export default function Home() {
  const spotLightRef = useRef();
  const targetRef = useRef();
  const spotLightHelperRef = useRef();
  const target = new THREE.Object3D();
  target.position.set(0, 0, 5);
  const helper = useHelper(spotLightRef, THREE.DirectionalLightHelper);
  // const { color, position, intensity } = useControls({
  //   color: "white",
  //   position: [-37, 12, 50],
  //   intensity: 0.5,
  // });
  return (
    <>
      {/* <FpsPlayer /> */}

      {/* <HouseModel /> */}
      {/* <CityFrameModel /> */}
      {/* <CityClone /> */}
      {/* <FinalModel /> */}
      <directionalLight
        position={[-37, 12, 50]} // Adjust the position as needed
        intensity={0.5}
        color={"white"}
      />
      <directionalLight
        position={[100, 40, 250]} // Adjust the position as needed
        intensity={0.5}
        color={"#ccc"}
        target={target}
      />
      <DynamicLight />
      {/* <GroupingLight /> */}
      <CastModel />
      {/* <BakedCity /> */}
      {/* <NinjaMale position={[9, 0.3, 0]} /> */}

      {/* <Sphere /> */}
    </>
  );
}
