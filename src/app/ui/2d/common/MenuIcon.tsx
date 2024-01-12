"use client";
import useMenu from "@/hooks/useMenu";
import React from "react";

type Props = {};

const MenuIcon = (props: Props) => {
  const { showMenuModal } = useMenu();
  return (
    <button
      id="control-menu-icon"
      onClick={showMenuModal}
      className="absolute top-[20px] portrait:max-sm:right-[70px] right-[90px] bg-black/40 hover:bg-black/60 hover:scale-110 rounded-full p-3 cursor-pointer transition-all duration-500 ease-in-out z-[150] "
    >
      <svg
        id="control-menu-icon-svg"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22.29 20.9"
        width="25"
        height="25"
        fill="white"
      >
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="m0,17.41c0,.58.47,1.04,1.04,1.04h2.6c.44,1.41,1.76,2.44,3.32,2.44s2.88-1.02,3.32-2.44h10.96c.58,0,1.04-.47,1.04-1.04s-.47-1.04-1.04-1.04h-10.96c-.44-1.41-1.76-2.44-3.32-2.44s-2.88,1.02-3.32,2.44H1.04c-.58,0-1.04.47-1.04,1.04Zm5.57,0c0-.77.62-1.39,1.39-1.39s1.39.62,1.39,1.39-.62,1.39-1.39,1.39-1.39-.62-1.39-1.39Zm8.36-6.97c0-.77.62-1.39,1.39-1.39s1.39.62,1.39,1.39-.62,1.39-1.39,1.39-1.39-.62-1.39-1.39Zm1.39-3.48c-1.56,0-2.88,1.02-3.32,2.44H1.04c-.58,0-1.04.47-1.04,1.04s.47,1.04,1.04,1.04h10.96c.44,1.41,1.76,2.44,3.32,2.44s2.88-1.02,3.32-2.44h2.6c.58,0,1.04-.47,1.04-1.04s-.47-1.04-1.04-1.04h-2.6c-.44-1.41-1.76-2.44-3.32-2.44Zm-6.97-2.09c-.77,0-1.39-.62-1.39-1.39s.62-1.39,1.39-1.39,1.39.62,1.39,1.39-.62,1.39-1.39,1.39Zm3.32-2.44c-.44-1.41-1.76-2.44-3.32-2.44s-2.88,1.02-3.32,2.44H1.04c-.58,0-1.04.47-1.04,1.04s.47,1.04,1.04,1.04h3.99c.44,1.41,1.76,2.44,3.32,2.44s2.88-1.02,3.32-2.44h9.56c.58,0,1.04-.47,1.04-1.04s-.47-1.04-1.04-1.04h-9.56Z"
          />
        </g>
      </svg>
    </button>
  );
};

export default MenuIcon;
