import React from "react";
import "./OrderList.scss";
import OrderHeader from "../../../molecules/Header/OrderHeader";
import { tableinfo } from "../../../assets/tableinfo/tableinfo";
import OrderListItem from "../../../molecules/Display/OrderListItem";
import OrderListTotal from "../../../molecules/Display/OrderListTotal";
import { useSelector } from "react-redux";
import order from "../Order/Order";

function OrderList(): React.JSX.Element {
  const orderList = useSelector((state: any) => {
    return state.basketSlice.orderList;
  });

  console.log(orderList);
  return (
    <div>
      <OrderHeader className={"주문내역"} tableNumber={tableinfo.tableNumber} />
      <div className={"list-grid-container"}>
        <div className={"list-grid-item head-font"}>상품명</div>
        <div className={"list-grid-item head-font"}>수량</div>
        <div className={"list-grid-item head-font"}>상품금액</div>
        <div className={"list-grid-item head-font"}>주문금액</div>
      </div>
      <div className={"list-grid-body"}>
        {orderList?.map((item: any) => {
          return (
            <OrderListItem
              QTY={item.QTY}
              MENU={item.menuName}
              itemPrice={item.price}
              orderPrice={item.price * item.QTY}
            ></OrderListItem>
          );
        })}
      </div>
      <OrderListTotal />
    </div>
  );
}

export default OrderList;
