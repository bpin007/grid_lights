import React from "react";

const Cell = ({ filled, onClick, isDisabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      //   className={filled ? "cell cell-activated" : "cell"}
      className={
        filled
          ? "bg-green-600"
          : "bg-transparent border-2 border-solid border-black h-0 pb-[100%]"
      }
    />
  );
};

export default Cell;
