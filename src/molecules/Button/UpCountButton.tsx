import React from "react";
import "./UpCountButton.scss";
import { useDispatch } from "react-redux";
import { upCountItem } from "../../redux/basketSlice";

export type UpCountButtonProps = {
  onClick(): void;
};

function UpCountButton(upCountButtonProps: UpCountButtonProps) {
  return (
    <div
      className={"up-count-button"}
      onClick={upCountButtonProps.onClick}
    ></div>
  );
}

export default UpCountButton;
