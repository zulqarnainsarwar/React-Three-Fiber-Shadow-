"use client";
import useProduct from "@/hooks/useProduct";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  const { product, closeProductModal } = useProduct();
  return (
    <div
      id="product-card"
      className={`${
        product.show ? "flex" : "hidden"
      } landscape:max-lg:flex-row h-fit w-[90%] lg:w-full p-6 landscape:max-lg:p-4 max-w-md lg:max-w-sm bg-white/50 border-2 mx-2 lg:mx-0 border-white rounded-3xl shadow  relative  flex-col z-[150] select-none`}
    >
      <button
        id="close-btn"
        className="rounded-full w-8 h-8 absolute -right-2 -top-2 text-lg font-semibold bg-white flex items-center text-center justify-center z-20"
        onClick={closeProductModal}
      >
        x
      </button>
      <div className="bg-white rounded-3xl cursor-pointer flex justify-center items-center h-fit m-auto">
        <Image
          id="product-img"
          className="bg-opacity-50 object-contain landscape:max-lg:max-h-[180px] max-h-[334px] max-w-[100%] rounded-2xl"
          src={product?.image}
          alt="product image"
          width={300}
          height={300}
        />
      </div>

      <div
        id="product-info"
        className="pt-5 landscape:max-lg:pl-5  lg:pt-5 h-fit"
      >
        <div id="product-name-row" className="flex flex-col justify-between">
          <div
            id="product-name"
            className="text-xl  font-semibold tracking-tight text-gray-900 "
          >
            {product?.name}
          </div>
          <div
            id="product-type"
            className="text-base opacity-60 font-semibold tracking-tight text-gray-900 "
          >
            {product?.type}
          </div>
        </div>
        <div
          id="product-price-row"
          className="flex flex-row items-center justify-between flex-wrap landscape:max-lg:flex-col landscape:max-lg:gap-2 landscape:max-lg:items-center"
        >
          <span
            id="product-price"
            className="text-xl font-bold text-gray-900 landscape:max-lg:mr-auto"
          >
            $ {product?.price}
          </span>
          <a
            id="product-page-link"
            href="#"
            target="_blank"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 lg:px-10 py-2.5 text-center landscape:max-lg:w-full "
          >
            Go to product
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
