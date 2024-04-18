import React from "react";
import "./OrderItem.scss";

import SelectItemImage from "../../../molecules/Display/SelectItemImage";
import SelectItemInfo from "../../../molecules/Display/SelectItemInfo";
import OrderHeader from "../../../molecules/Header/OrderHeader";

import { tableinfo } from "../../../assets/tableinfo/tableinfo";

type LocationProps = {
  location: string;
};

function OrderItem(): React.JSX.Element {
  const location: string = window.location.pathname.split("/")[2];

  const locationProps: LocationProps = {
    location: location,
  };

  return (
    <div>
      <OrderHeader className={"메뉴상세"} tableNumber={tableinfo.tableNumber} />
      <div className={"grid-body"}>
        <SelectItemImage location={locationProps.location} />
        <SelectItemInfo location={locationProps.location} />
      </div>
    </div>
  );
}

export default OrderItem;
