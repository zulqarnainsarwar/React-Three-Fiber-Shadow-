"use client";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { close, show } from "@/app/lib/redux/features/productSlice";

const useProduct = () => {
  const product = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
  const showProductModal = (product: ProductState) => {
    dispatch(show(product));
  };
  const closeProductModal = () => {
    dispatch(close());
  };

  return {
    product,
    showProductModal,
    closeProductModal,
  };
};

export default useProduct;
