import React from "react";
import "./OrderHeader.scss";
import ItemCloseButton from "../Button/ItemCloseButton";
import { ROUTE } from "../../constants/Route";
import { useNavigate } from "react-router-dom";

interface HeaderItemProps {
  className: String;
  tableNumber: String;
}

function OrderHeader(headerIteamProps: HeaderItemProps) {
  const navigate = useNavigate();
  const className = headerIteamProps.className;
  const tableNumber = headerIteamProps.tableNumber;

  const goToMain = () => {
    navigate(ROUTE.ORDER);
  };

  return (
    <div className={"grid-container"}>
      <div className={"order-head-box"}>
        <span className={"order-head-font"}>{className}</span>
        <span className={"order-head-font"}>Table-{tableNumber}</span>
      </div>
      <ItemCloseButton onClick={goToMain} />
    </div>
  );
}

export default OrderHeader;
