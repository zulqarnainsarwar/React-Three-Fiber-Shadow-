import { RapierRigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Controls } from "@/config";
let MOVEMENT_SPEED = 120;
let LOOK_SPEED = 0.0005;
type Props = {
  movementSpeed?: number;
  rotationSpeed?: number;
};
const useFpsPlayer = (props: Props) => {
  useEffect(() => {
    if (props.movementSpeed) MOVEMENT_SPEED = props.movementSpeed;
    if (props.rotationSpeed) LOOK_SPEED = props.rotationSpeed;
  }, []);
  const camera = useRef<THREE.PerspectiveCamera>(null!);
  const cameraBody = useRef<RapierRigidBody>(null!);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );
  const [cameraState, setCameraState] = useState<"fixed" | "dynamic">("fixed");
  const eulers = useRef(new THREE.Vector3(0, 0, 0)).current;
  const isMoving = useRef<boolean>(false);
  // const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const onMouseMove = (event: MouseEvent) => {
    if (!isMoving.current) return;
    document.body.style.cursor = "grabbing";
    eulers.y -= LOOK_SPEED * event.movementX;
    // eulers.x -= LOOK_SPEED * event.movementY;
    // eulers.y = clamp(
    //   eulers.y,
    //   THREE.MathUtils.degToRad(-90),
    //   THREE.MathUtils.degToRad(90)
    // );
  };

  const handleMouseDown = () => {
    isMoving.current = true;
  };
  const handleMouseUp = () => {
    isMoving.current = false;
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCameraState("dynamic");
    }, 500);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      clearTimeout(timer);
    };
  }, []);

  const forward = new THREE.Vector3(0, 0, -1);
  const right = new THREE.Vector3(1, 0, 0);
  const { camera: cameraTest } = useThree();

  const handlePositionMovement = (speed: number) => {
    const movementVector = new THREE.Vector3(0, 0, 0);
    if (rightPressed) {
      movementVector.x += right.x;
      movementVector.z += right.z;
    }
    if (leftPressed) {
      movementVector.x -= right.x;
      movementVector.z -= right.z;
    }
    if (forwardPressed) {
      movementVector.x -= forward.x;
      movementVector.z -= forward.z;
    }
    if (backPressed) {
      movementVector.x += forward.x;
      movementVector.z += forward.z;
    }
    movementVector.x *= speed;
    movementVector.z *= speed;
    if (movementVector.lengthSq() > 0) {
      movementVector.normalize().multiplyScalar(speed);
    }

    cameraBody.current.applyImpulse(movementVector, true);
  };

  useFrame((_, delta) => {
    handlePositionMovement(MOVEMENT_SPEED * delta);
    if (isMoving.current) {
      camera.current.rotation.setFromVector3(eulers);
    }

    cameraTest.getWorldDirection(forward);
    forward.negate(); // Negate because Three.js forward is the negative Z-axis

    // Update right vector
    cameraTest.matrixWorld.extractBasis(
      right,
      new THREE.Vector3(),
      new THREE.Vector3()
    );
  });
  return {
    camera,
    cameraBody,
    cameraState,
  };
};

export default useFpsPlayer;
