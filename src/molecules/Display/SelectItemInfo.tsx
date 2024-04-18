import React from "react";
import "./SelectItemInfo.scss";
import CartAddButton from "../Button/CartAddButton";
import CartItemList from "./CartItemList";
import { menulist } from "../../assets/menulist/menulist";

interface SelectItemImageProps {
  location?: string;
  itemNo?: number;
}

function SelectItemInfo({ location }: SelectItemImageProps) {
  let itemNo: number = 0;
  if (location != undefined) {
    itemNo = parseInt(location) - 1;
  }
  return (
    <div className={"select-item-info-container"}>
      <div className={"item-info-area"}>
        <span className={"item-info-name-font"}>
          {menulist[itemNo].menuName}
        </span>
        <span className={"item-info-detail-font"}>
          {menulist[itemNo].detail}
        </span>
        <div className={"item-bottom-area"}>
          <span className={"item-info-vat-font"}>
            가격은 원화로 표기 됩니다.
          </span>
          <span className={"item-info-vat-font"}>
            10% 부가세와 10% 봉사료가 포함되어 있습니다.
          </span>
          <CartAddButton />
        </div>
      </div>
    </div>
  );
}

export default SelectItemInfo;
