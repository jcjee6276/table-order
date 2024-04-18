import React, { JSXElementConstructor } from "react";
import "./ItemInfo.scss";
import { useNavigate } from "react-router-dom";

interface ItemInfoProps {
  className?: string;
  itemPrice?: number;
  imageUrl?: string;
  onClick?: React.MouseEventHandler;
  itemNo?: number;
}

function ItemInfo(itemInfoProps: ItemInfoProps) {
  const navigate = useNavigate();

  return (
    <div id="grid-item" className={"grid-item"} onClick={itemInfoProps.onClick}>
      <img className={"grid-image"} src={itemInfoProps.imageUrl} />
      <br />
      <span className={"grid-font-menu-name"}>{itemInfoProps.className}</span>
      <br />
      <span className={"grid-font-price"}>{itemInfoProps.itemPrice}원</span>
    </div>
  );
}

export default ItemInfo;
