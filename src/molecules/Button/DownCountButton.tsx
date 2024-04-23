import React from "react";
import "./DownCountButton.scss";

export type DownCountButtonProps = {
  onClick(): void;
};

function DownCountButton(downCountButtonProps: DownCountButtonProps) {
  return (
    <div
      className={"down-count-button"}
      onClick={downCountButtonProps.onClick}
    ></div>
  );
}

export default DownCountButton;
