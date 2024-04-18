import React from "react";
import "./CartItemList.scss";
import OneRemoveButton from "../Button/OneRemoveButton";
import DownCountButton from "../Button/DownCountButton";
import UpCountButton from "../Button/UpCountButton";
function CartItemList() {
  return (
    <div className={"cart-item-container"}>
      <span className={"menu-name-font"}>초코라떼</span>
      <OneRemoveButton />
      <span className={"menu-price-font"}>50,000 원</span>
      <div className={"count-box"}>
        <DownCountButton />
        <span className={"menu-name-font"}>2개</span>
        <UpCountButton />
      </div>
      <div className={"cart-liner"}></div>
    </div>
  );
}

export default CartItemList;
