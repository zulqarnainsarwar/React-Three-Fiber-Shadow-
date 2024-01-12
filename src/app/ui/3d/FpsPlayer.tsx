"use client";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import useFpsPlayer from "../../../hooks/useFpsPlayer";
import { PerspectiveCamera } from "@react-three/drei";
import { debugMode } from "@/config";

const FpsPlayer = () => {
  const { camera, cameraBody, cameraState } = useFpsPlayer({
    movementSpeed: 250,
    rotationSpeed: 0.001,
  });

  return (
    <RigidBody
      ref={cameraBody}
      colliders={false}
      lockRotations
      linearDamping={12}
      type={cameraState}
    >
      <PerspectiveCamera
        ref={camera}
        makeDefault={!debugMode}
        position={[0, 2.28, 17]}
        rotation={[0, 0, 0]}
        fov={50}
      />
      <CapsuleCollider args={[0.6, 0.8]} position={[0, 1.35, 17]} />
    </RigidBody>
  );
};

export default FpsPlayer;
