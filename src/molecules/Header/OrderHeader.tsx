import React from "react";
import "./OrderHeader.scss";
import ItemCloseButton from "../Button/ItemCloseButton";

interface HeaderItemProps {
  className: String;
  tableNumber: String;
}

function OrderHeader(headerIteamProps: HeaderItemProps) {
  const className = headerIteamProps.className;
  const tableNumber = headerIteamProps.tableNumber;

  return (
    <div className={"grid-container"}>
      <div className={"order-head-box"}>
        <span className={"order-head-font"}>{className}</span>
        <span className={"order-head-font"}>Table-{tableNumber}</span>
      </div>
      <ItemCloseButton />
    </div>
  );
}

export default OrderHeader;
