import useProduct from "@/hooks/useProduct";
import { useCursor, useTexture } from "@react-three/drei";
import React, { useState } from "react";

const PlusButton = ({ product }: { product: Product }) => {
  const plusButtonTexture = useTexture("/plusIcon.png");
  const { showProductModal } = useProduct();
  const [hovered, set] = useState(false);
  useCursor(hovered);
  return (
    <mesh
      onClick={() => {
        console.log("plus button clicked", product);
        showProductModal({
          show: true,
          ...product,
        });
      }}
      position={[0, -0.5, 10]}
      scale={1}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
    >
      <planeGeometry args={[0.1, 0.1]} />{" "}
      <meshBasicMaterial
        attach="material"
        map={plusButtonTexture}
        transparent
        side={2}
        polygonOffset
        polygonOffsetFactor={-20}
      />
    </mesh>
  );
};

export default PlusButton;
