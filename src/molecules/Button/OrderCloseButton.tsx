import React from "react";
import "./OrderCloseButton.scss";

interface CloseButtonProps {
  onClick(): void;
}

function OrderCloseButton(closeButtonProps: CloseButtonProps) {
  return (
    <div className={"close-button"} onClick={closeButtonProps.onClick}>
      <span className={"close-button-font"}>닫기</span>
    </div>
  );
}

export default OrderCloseButton;
