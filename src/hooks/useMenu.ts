"use client";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { close, show } from "@/app/lib/redux/features/controlMenuSlice";

const useMenu = () => {
  const menu = useAppSelector((state) => state.controlMenuReducer);
  const dispatch = useAppDispatch();
  const showMenuModal = () => {
    dispatch(
      show({
        show: true,
      })
    );
  };
  const closeMenuModal = () => {
    dispatch(close());
  };

  return {
    menu,
    showMenuModal,
    closeMenuModal,
  };
};

export default useMenu;
