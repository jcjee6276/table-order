import React from "react";
import "./OrderButton.scss";

export type OrderButtonProps = {
  onClick(): void;
};

function OrderButton(orderButtonProps: OrderButtonProps) {
  return (
    <div className={"order-button"} onClick={orderButtonProps.onClick}>
      <span className={"order-button-font"}>주문하기</span>
    </div>
  );
}

export default OrderButton;
