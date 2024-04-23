import React from "react";
import "./OrderListItem.scss";

import { OrderItemData } from "../../types/api/item/order";

function OrderListItem(orderItemData: OrderItemData) {
  return (
    <div className={"order-list-item-container"}>
      <div className={"list-grid-body-item body-font"}>
        {orderItemData.MENU}
      </div>
      <div className={"list-grid-body-item body-font text-center"}>
        {orderItemData.QTY}개
      </div>
      <div className={"list-grid-body-item body-font text-center"}>
        {orderItemData.itemPrice}원
      </div>
      <div className={"list-grid-body-item body-font text-right"}>
        {orderItemData.orderPrice}원
      </div>
    </div>
  );
}

export default OrderListItem;
