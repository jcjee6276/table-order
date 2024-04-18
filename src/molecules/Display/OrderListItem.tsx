import React from "react";
import "./OrderListItem.scss";

function OrderListItem() {
  return (
    <div className={"order-list-item-container"}>
      <div className={"list-grid-body-item body-font"}>
        제주 위트에일 1,000ml
      </div>
      <div className={"list-grid-body-item body-font text-center"}>1개</div>
      <div className={"list-grid-body-item body-font text-center"}>
        32,000원
      </div>
      <div className={"list-grid-body-item body-font text-right"}>32,000원</div>
    </div>
  );
}

export default OrderListItem;
