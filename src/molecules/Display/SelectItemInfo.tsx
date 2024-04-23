import React, { useState } from "react";
import "./SelectItemInfo.scss";
import CartAddButton from "../Button/CartAddButton";
import CartItemList from "./CartItemList";
import { menulist } from "../../assets/menulist/menulist";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/basketSlice";
import { useNavigate } from "react-router-dom";
import { BasketItemData } from "../../types/api/item/item";
import { ROUTE } from "../../constants/Route";

interface SelectItemImageProps {
  location?: string;
  itemNo?: number;
}

function SelectItemInfo({ location }: SelectItemImageProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [test, setTest] = useState("");
  let itemNo: number = 0;
  if (location != undefined) {
    itemNo = parseInt(location) - 1;
  }

  const handleAddItem = () => {
    dispatch(addItem(menulist[itemNo]));
    navigate("/order");
  };

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
          <CartAddButton onClick={handleAddItem} />
        </div>
      </div>
    </div>
  );
}

export default SelectItemInfo;
