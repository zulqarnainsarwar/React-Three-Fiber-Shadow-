"use client";
import { debugMode, map } from "@/config";
import {
  Environment,
  KeyboardControls,
  Loader,
  BakeShadows,
  OrbitControls,
  SpotLight,
  SoftShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import React, { Fragment, Suspense } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
import { Light } from "../2d/common/SpotLight";
import { PintLightsHelper } from "../2d/common/PointLightsHelper";
import { DirectionalHelperLight } from "../2d/common/DirectionalHelperLight";
import { CameraFrameModel } from "../2d/common/CameraFrame";
import { TestSeanChecker } from "../2d/common/TestSecn";
type Props = {
  children: React.ReactNode;
};

const R3fSetupWrapper = ({ children }: Props) => {
  return (
    <div className="absolute w-full h-screen z-0">
      <KeyboardControls map={map}>
        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          shadows
          dpr={[1, 1.5]}
          camera={{
            position: [0, 5, 12],
            rotation: [1, degToRad(180), 2],
            fov: 50,
          }}
        >
          {/* <DirectionalHelperLight /> */}
          {/* <CameraFrameModel /> */}
          {/* <TestSeanChecker /> */}
          {/* <directionalLight
            position={[0, 20, -20]}
            intensity={0.5}
            color={"red"}
            castShadow
          /> */}
          {/* <BakeShadows /> */}
          {/* <SoftShadows /> */}
          {/* <Environment files="/hdri/kloppenheim_06_puresky_1k.hdr" background /> */}

          <ambientLight intensity={0.5} />
          {/* <PintLightsHelper /> */}

          {/* <Light /> */}
          {/* <SpotLight position={[0, 5, 2]} castShadow /> */}

          {/* <directionalLight
            position={[5, 5, 5]}
            intensity={0.5}
            color="white"
            castShadow
            shadow-mapSize={[2048, 2048]}
          /> */}
          <OrbitControls />
          <Physics debug={debugMode}>
            <Suspense>{children}</Suspense>
          </Physics>
        </Canvas>
      </KeyboardControls>
      <Loader />
    </div>
  );
};

export default R3fSetupWrapper;
