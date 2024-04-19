import React from "react";
import "./ItemCloseButton.scss";

interface ItemCloseButtonProps {
  onClick(): void;
}

function ItemCloseButton(itemCloseButtonProps: ItemCloseButtonProps) {
  return (
    <div className={"item-close-button"} onClick={itemCloseButtonProps.onClick}>
      <div className={"item-close-icon"}></div>
    </div>
  );
}

export default ItemCloseButton;
