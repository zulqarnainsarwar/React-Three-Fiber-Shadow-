import { Decal, useCursor, useHelper, useTexture } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { useRef, useState } from "react";
import PlusButton from "./PlusButton";
import * as THREE from "three";
import { debugMode } from "@/config";
type custom = {
  id: number;
  product: Product;
  handleImageClick: (event: ThreeEvent<MouseEvent>, id: number) => void;
} & React.JSX.IntrinsicElements["mesh"];

const ImagePlane = ({ id, product, handleImageClick, ...props }: custom) => {
  const ref = useRef<THREE.Mesh>(null!);
  useHelper(ref, THREE.BoxHelper, "purple");
  const texture = useTexture(product.image);

  let aspectRatio = texture.source.data.height / texture.source.data.width;
  if (aspectRatio > 1) {
    aspectRatio = 1 / aspectRatio;
  }
  const isHeightLonger = texture.source.data.height > texture.source.data.width;
  return (
    <mesh
      ref={debugMode ? ref : null}
      {...props}
      onClick={(event) => handleImageClick(event, id)}
      // onPointerOver={() => set(true)}
      // onPointerOut={() => set(false)}
    >
      <planeGeometry />{" "}
      <Decal
        position={[0, 0, 0]} // Position of the decal
        rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
        scale={[
          isHeightLonger ? aspectRatio * 0.99 : 0.99,
          isHeightLonger ? 0.99 : aspectRatio * 0.99,
          0.001,
        ]}
      >
        <meshStandardMaterial
          map={texture}
          polygonOffset
          polygonOffsetFactor={-10}
        />
      </Decal>
      <meshBasicMaterial
        color={"#ffffff"}
        polygonOffset
        polygonOffsetFactor={20}
      />
      <PlusButton product={product} />
    </mesh>
  );
};

export default ImagePlane;
