"use client";

import useMenu from "@/hooks/useMenu";
import React from "react";

type Props = {};

const ControlMenuCard = (props: Props) => {
  const { menu, showMenuModal, closeMenuModal } = useMenu();
  return (
    <div
      id="control-menu"
      className={`${
        menu?.show ? "flex" : "hidden"
      } landscape:max-lg:w-[400px] w-[90%] lg:w-[600px] h-fit px-8 py-8 landscape:max-lg:py-5 landscape:max-lg:px-5 sm:px-20 text-white/40 bg-black/60 rounded-xl backdrop-blur-sm drop-shadow-lg flex-col landscape:max-lg:gap-5 gap-10 items-center justify-start transition-all duration-500 ease-in-out z-[100] relative`}
    >
      <button
        id="close-btn-control"
        className="rounded-full w-8 h-8 absolute -right-2 -top-2 text-lg font-semibold bg-white flex items-center text-center justify-center hover:scale-105 z-20 text-black"
        onClick={closeMenuModal}
      >
        x
      </button>
      <div className="font-sans text-lg border-b pb-2 border-white/20 w-[200px] flex items-center justify-center">
        <div>Controls</div>
      </div>
      <div className="w-full flex-1 flex justify-start items-center flex-col landscape:max-lg:space-y-2 space-y-4">
        <div className="flex flex-row justify-between w-full mx-auto items-center">
          <div>Movement</div>
          <div className="flex flex-row space-x-2 w-[120px] items-center justify-center">
            <div className="w-6 h-6 bg-white text-sm rounded-md text-black flex text-center items-center justify-center">
              W
            </div>
            <div className="w-6 h-6 bg-white text-sm rounded-md text-black flex text-center items-center justify-center">
              A
            </div>
            <div className="w-6 h-6 bg-white text-sm rounded-md text-black flex text-center items-center justify-center">
              S
            </div>
            <div className="w-6 h-6 bg-white text-sm rounded-md text-black flex text-center items-center justify-center">
              D
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full mx-auto items-center">
          <div>Navigation</div>
          <div className="flex flex-row space-x-2 w-[120px] items-center justify-center">
            <div>
              <svg
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 356.572 356.572"
              >
                <g>
                  <path
                    d="M181.563,0C120.762,0,59.215,30.525,59.215,88.873V237.5c0,65.658,53.412,119.071,119.071,119.071
  c65.658,0,119.07-53.413,119.07-119.071V88.873C297.356,27.809,237.336,0,181.563,0z M274.945,237.5
  c0,53.303-43.362,96.657-96.659,96.657c-53.299,0-96.657-43.354-96.657-96.657v-69.513c20.014,6.055,57.685,15.215,102.221,15.215
  c28.515,0,59.831-3.809,91.095-14.567V237.5z M274.945,144.794c-81.683,31.233-168.353,7.716-193.316-0.364V88.873
  c0-43.168,51.489-66.46,99.934-66.46c46.481,0,93.382,20.547,93.382,66.46V144.794z M190.893,48.389v81.248
  c0,6.187-5.023,11.208-11.206,11.208c-6.185,0-11.207-5.021-11.207-11.208V48.389c0-6.186,5.021-11.207,11.207-11.207
  C185.869,37.182,190.893,42.203,190.893,48.389z M154.938,40.068V143.73c-15.879,2.802-62.566-10.271-62.566-10.271
  C80.233,41.004,154.938,40.068,154.938,40.068z"
                  />
                </g>
              </svg>
            </div>
            <div>
              <svg
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 356.572 356.572"
              >
                <g>
                  <path
                    d="M181.563,0C120.762,0,59.215,30.525,59.215,88.873V237.5c0,65.658,53.412,119.071,119.071,119.071
             c65.658,0,119.07-53.413,119.07-119.071V88.873C297.356,27.809,237.336,0,181.563,0z M274.945,237.5
             c0,53.303-43.362,96.657-96.659,96.657c-53.299,0-96.657-43.354-96.657-96.657v-69.513c20.014,6.055,57.685,15.215,102.221,15.215
             c28.515,0,59.831-3.809,91.095-14.567V237.5z M274.945,144.794c-81.683,31.233-168.353,7.716-193.316-0.364V88.873
             c0-43.168,51.489-66.46,99.934-66.46c46.481,0,93.382,20.547,93.382,66.46V144.794z M190.893,48.389v81.248
             c0,6.187-5.023,11.208-11.206,11.208c-6.185,0-11.207-5.021-11.207-11.208V48.389c0-6.186,5.021-11.207,11.207-11.207
             C185.869,37.182,190.893,42.203,190.893,48.389z M264.272,130.378c0,0-46.687,13.072-62.566,10.271V36.988
             C201.706,36.988,276.412,37.923,264.272,130.378z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full mx-auto items-center">
          <div>Interaction</div>
          <div className="flex flex-row space-x-2 w-[120px] items-center justify-center">
            <div>
              <svg
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 356.572 356.572"
              >
                <g>
                  <path
                    d="M181.563,0C120.762,0,59.215,30.525,59.215,88.873V237.5c0,65.658,53.412,119.071,119.071,119.071
  c65.658,0,119.07-53.413,119.07-119.071V88.873C297.356,27.809,237.336,0,181.563,0z M274.945,237.5
  c0,53.303-43.362,96.657-96.659,96.657c-53.299,0-96.657-43.354-96.657-96.657v-69.513c20.014,6.055,57.685,15.215,102.221,15.215
  c28.515,0,59.831-3.809,91.095-14.567V237.5z M274.945,144.794c-81.683,31.233-168.353,7.716-193.316-0.364V88.873
  c0-43.168,51.489-66.46,99.934-66.46c46.481,0,93.382,20.547,93.382,66.46V144.794z M190.893,48.389v81.248
  c0,6.187-5.023,11.208-11.206,11.208c-6.185,0-11.207-5.021-11.207-11.208V48.389c0-6.186,5.021-11.207,11.207-11.207
  C185.869,37.182,190.893,42.203,190.893,48.389z M154.938,40.068V143.73c-15.879,2.802-62.566-10.271-62.566-10.271
  C80.233,41.004,154.938,40.068,154.938,40.068z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full mx-auto items-center">
          <div>Mouse Sensitivity</div>
          <div className="flex flex-row space-x-2 w-[120px] items-center justify-center">
            <input
              id="mouse-sensitivity"
              type="range"
              value="70"
              className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between w-full mx-auto items-center">
          <div>Movement Power</div>
          <div className="flex flex-row space-x-2 w-[120px] items-center justify-center">
            <input
              id="movement-power"
              type="range"
              value="70"
              className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlMenuCard;
