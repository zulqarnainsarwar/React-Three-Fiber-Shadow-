import React from "react";
import ProductCard from "./ProductCard";
import MenuIcon from "./common/MenuIcon";
import FullScreenIcon from "./common/FullScreenIcon";
import ControlMenuCard from "./ControlMenuCard";

type Props = {};

const UIContainer = (props: Props) => {
  return (
    <div className="w-full h-screen flex items-center justify-center absolute">
      <ProductCard />
      <ControlMenuCard />
      <>
        <MenuIcon />
        <FullScreenIcon />
      </>
    </div>
  );
};

export default UIContainer;
