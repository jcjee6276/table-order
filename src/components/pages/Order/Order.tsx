import React, { useState, createContext, useContext, useEffect } from "react";
import "./Order.scss";

import Item from "../../../molecules/Display/ItemInfo";
import AllRemoveButton from "../../../molecules/Button/AllRemoveButton";
import CartItemList from "../../../molecules/Display/CartItemList";
import OrderButton from "../../../molecules/Button/OrderButton";
import OrderCloseButton from "../../../molecules/Button/OrderCloseButton";
import { menulist } from "../../../assets/menulist/menulist";
import { useNavigate } from "react-router-dom";
import TotalAccountModal from "../../modals/TotalAccountModal";

import {
  allRemoveItem,
  modalClose,
  orderItemList,
} from "../../../redux/basketSlice";

import { ROUTE } from "../../../constants/Route";
import { useDispatch, useSelector } from "react-redux";

function Order() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [menu, setMenu] = useState([...menulist]);
  let totalPrice = 0;

  const allRemoveButton = () => dispatch(allRemoveItem());

  const getModalStatus = useSelector((state: any) => {
    return state.basketSlice.modalOpen;
  });

  const handleClickCloseButton = () => {
    dispatch(modalClose());
  };

  const handleClickOrderButton = () => {
    dispatch(orderItemList());
    navigate(ROUTE.ORDER_LIST);
  };

  const menuItem = useSelector((state: any) => {
    return state.basketSlice.basket;
  });

  const totalPriceCalc = () => {
    menuItem.forEach((item: any) => {
      totalPrice += item.price * item.QTY;
    });
  };

  totalPriceCalc();

  const handleClickMenu = (itemNo: number): any => {
    navigate(ROUTE.ORDER + "/" + itemNo);
  };

  const goToMain = () => {
    navigate(ROUTE.INIT);
  };
  return (
    <body className={"body"}>
      <div className={"order-container"}>
        {menu.map((item, index: number) => {
          return (
            <Item
              className={item.menuName}
              itemPrice={item.price}
              imageUrl={item.imageUrl}
              onClick={() => handleClickMenu(item.itemNo)}
              itemNo={item.itemNo}
            />
          );
        })}
      </div>
      {getModalStatus && (
        <div className={"cart-container"}>
          <AllRemoveButton onClick={allRemoveButton} />

          <div className={"cart-body-container"}>
            {menuItem.map((item: any, index: number) => {
              const orderPrice = item.price * item.QTY;

              return (
                <CartItemList
                  MENU={item.menuName}
                  PRICE={orderPrice}
                  QTY={item.QTY}
                  itemNo={item.itemNo}
                  basketIdx={index}
                ></CartItemList>
              );
            })}
          </div>

          <div className={"button-area"}>
            <TotalAccountModal totalPrice={totalPrice} />
            <div className={"button-container"}>
              <OrderCloseButton onClick={handleClickCloseButton} />
              <OrderButton onClick={handleClickOrderButton} />
            </div>
          </div>
        </div>
      )}
    </body>
  );
}

export default Order;
