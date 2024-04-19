import React, { useState } from "react";
import "./Order.scss";

import Item from "../../../molecules/Display/ItemInfo";
import AllRemoveButton from "../../../molecules/Button/AllRemoveButton";
import CartItemList from "../../../molecules/Display/CartItemList";
import OrderButton from "../../../molecules/Button/OrderButton";
import OrderCloseButton from "../../../molecules/Button/OrderCloseButton";
import { menulist } from "../../../assets/menulist/menulist";
import { useNavigate } from "react-router-dom";

import { ROUTE } from "../../../constants/Route";

function Order() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState([...menulist]);

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

      <div className={"cart-container"}>
        <AllRemoveButton />
        <div className={"cart-body-container"}>
          <CartItemList></CartItemList>
          <CartItemList></CartItemList>
          <CartItemList></CartItemList>
          <CartItemList></CartItemList>
          <CartItemList></CartItemList>
          <CartItemList></CartItemList>
        </div>

        <div className={"button-area"}>
          {/*<TotalAccountModal />*/}
          <div className={"button-container"}>
            <OrderCloseButton onClick={goToMain} />
            <OrderButton />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Order;
