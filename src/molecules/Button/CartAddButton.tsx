import React from "react";
import "./CartAddButton.scss";

interface CartAddButtonProps {
  onClick(): void;
}

function CartAddButton(cartAddButtonProps: CartAddButtonProps) {
  return (
    <div
      className={"cart-add-button-container"}
      onClick={cartAddButtonProps.onClick}
    >
      <span className={"cart-add-font"}>장바구니 담기</span>
    </div>
  );
}

export default CartAddButton;
