import React from "react";
import "./SelectItemImage.scss";

import { menulist } from "../../assets/menulist/menulist";
import SelectItemInfo from "./SelectItemInfo";
import { type } from "@testing-library/user-event/dist/type";
import itemInfo from "./ItemInfo";

interface SelectItemImageProps {
  location?: string;
  itemNo?: number;
}

function SelectItemImage({ location }: SelectItemImageProps) {
  let itemNo: number = 0;
  if (location != undefined) {
    itemNo = parseInt(location) - 1;
  }

  const selectItemImageProps: SelectItemImageProps = {
    location: location,
    itemNo: itemNo,
  };
  return (
    <div className={"item-image-container"}>
      <img className={"item-image-area"} src={menulist[itemNo].imageUrl} />
      <div className={"select-item-liner"}></div>
    </div>
  );
}

export default SelectItemImage;
