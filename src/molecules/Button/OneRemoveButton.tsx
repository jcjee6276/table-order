import React from "react";
import "./OneRemoveButton.scss";

export type OneRemoveButtonProps = {
  onClick(): void;
};

function OneRemoveButton(oneRemoveButtonProps: OneRemoveButtonProps) {
  return (
    <div className={"one-button"} onClick={oneRemoveButtonProps.onClick}></div>
  );
}

export default OneRemoveButton;
