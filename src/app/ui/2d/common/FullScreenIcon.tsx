"use client";
import React from "react";

type Props = {};

const FullScreenIcon = (props: Props) => {
  return (
    <button
      id="full-screen-btn"
      className="flex absolute top-[20px] portrait:max-sm:right-[10px] right-[30px] bg-black/40 hover:bg-black/60 hover:scale-110 rounded-full p-3 cursor-pointer transition-all duration-500 ease-in-out z-[100] "
      onClick={() => {
        if (!document.fullscreenElement) {
          const elem = document.documentElement;
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      }}
    >
      <svg
        id="fullscreen-icon-1"
        className="flex"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20.58 20.58"
        width="25"
        height="25"
        fill="white"
      >
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="m1.47,0C.66,0,0,.66,0,1.47v4.41c0,.81.66,1.47,1.47,1.47s1.47-.66,1.47-1.47v-2.94h2.94c.81,0,1.47-.66,1.47-1.47s-.66-1.47-1.47-1.47H1.47Zm1.47,14.7c0-.81-.66-1.47-1.47-1.47s-1.47.66-1.47,1.47v4.41c0,.81.66,1.47,1.47,1.47h4.41c.81,0,1.47-.66,1.47-1.47s-.66-1.47-1.47-1.47h-2.94v-2.94ZM14.7,0c-.81,0-1.47.66-1.47,1.47s.66,1.47,1.47,1.47h2.94v2.94c0,.81.66,1.47,1.47,1.47s1.47-.66,1.47-1.47V1.47c0-.81-.66-1.47-1.47-1.47h-4.41Zm5.88,14.7c0-.81-.66-1.47-1.47-1.47s-1.47.66-1.47,1.47v2.94h-2.94c-.81,0-1.47.66-1.47,1.47s.66,1.47,1.47,1.47h4.41c.81,0,1.47-.66,1.47-1.47v-4.41Z"
          />
        </g>
      </svg>
      <svg
        id="fullscreen-icon-2"
        className="hidden"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />

        <g id="Complete">
          <g id="minimize">
            <g>
              <path
                d="M8,3V6A2,2,0,0,1,6,8H3"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              />

              <path
                d="M16,21V18a2,2,0,0,1,2-2h3"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              />

              <path
                d="M8,21V18a2,2,0,0,0-2-2H3"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              />

              <path
                d="M16,3V6a2,2,0,0,0,2,2h3"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
  );
};

export default FullScreenIcon;
