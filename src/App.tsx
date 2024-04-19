import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import React from "react";
import "./constants/Route";

import { ROUTE } from "./constants/Route";

import ORDER from "./components/pages/Order/Order";
import ORDER_ITEM from "./components/pages/OrderItem/OrderItem";
import ORDER_LIST from "./components/pages/OrderList/OrderList";
import INIT from "./components/pages/Main/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.INIT} element={<INIT />} />
        <Route path={ROUTE.ORDER} element={<ORDER />} />
        <Route path={ROUTE.ORDER_ITEM} element={<ORDER_ITEM />} />
        <Route path={ROUTE.ORDER_LIST} element={<ORDER_LIST />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
