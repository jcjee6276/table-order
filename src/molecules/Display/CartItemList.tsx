import React, { ReducerState, useState } from "react";
import "./CartItemList.scss";
import OneRemoveButton from "../Button/OneRemoveButton";
import DownCountButton from "../Button/DownCountButton";
import UpCountButton from "../Button/UpCountButton";
import { useDispatch, useSelector } from "react-redux";
import { SliceCaseReducers } from "@reduxjs/toolkit";
import { BasketItemData } from "../../types/api/item/item";
import {
  upCountItem,
  downCountItem,
  removeItem,
} from "../../redux/basketSlice";

function CartItemList(basketItemData: BasketItemData) {
  const dispatch = useDispatch();
  const handleClickUpButton = () => {
    dispatch(upCountItem(basketItemData.basketIdx));
  };

  const handleClickDownButton = () => {
    dispatch(downCountItem(basketItemData.basketIdx));
  };

  const handleClickOneRemoveButton = () => {
    dispatch(removeItem(basketItemData.basketIdx));
  };

  return (
    <div className={"cart-item-container"}>
      <span className={"menu-name-font"}>{basketItemData.MENU}</span>
      <OneRemoveButton onClick={handleClickOneRemoveButton} />
      <span className={"menu-price-font"}>{basketItemData.PRICE} 원</span>
      <div className={"count-box"}>
        <DownCountButton onClick={handleClickDownButton} />
        <span className={"menu-name-font"}>{basketItemData.QTY}개</span>
        <UpCountButton onClick={handleClickUpButton} />
      </div>
      <div className={"cart-liner"}></div>
    </div>
  );
}

export default CartItemList;
