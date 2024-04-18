import React from "react";
import "./OrderListTotal.scss";

function OrderListTotal() {
  return (
    <div className={"list-grid-footer"}>
      <span className={"order-list-total-item head-font"}>합계</span>
      <span className={"order-list-total-item head-font text-right"}>
        64,000원
      </span>
    </div>
  );
}

export default OrderListTotal;
