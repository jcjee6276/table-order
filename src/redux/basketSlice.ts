import { createSlice } from "@reduxjs/toolkit";
import { BasketItemData } from "../types/api/item/item";
import { OrderItemData } from "../types/api/item/order";

export type BasketSliceState = {
  itemCount: number;
  basketIdx: number;
  basket: BasketItemData[];
  orderList: OrderItemData[];
};

const initialState: BasketSliceState = {
  itemCount: 1,
  basketIdx: -1,
  basket: [],
  orderList: [],
};

const basketSlice = createSlice({
  name: "basketSlice",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      state.basketIdx += 1;
      const countItem = {
        ...action.payload,
        QTY: state.itemCount,
        idx: state.basketIdx,
      };
      state.basket.push(countItem);
    },
    downCountItem: (state, action) => {
      state.basket.forEach((item: any, index: number) => {
        if (index === action.payload && item.QTY > 1) {
          item.QTY -= 1;
        }
      });
    },
    upCountItem: (state: any, action) => {
      state.basket.forEach((item: any, index: number) => {
        if (index === action.payload) {
          item.QTY += 1;
        }
      });
    },
    removeItem: (state, action) => {
      state.basket.splice(action.payload, 1);
    },
    allRemoveItem: (state) => {
      state.basket = [];
      state.basketIdx = -1;
    },
    orderItemList: (state: any) => {
      state.orderList = state.basket;
      state.basket = [];
    },
  },
});

export const {
  orderItemList,
  removeItem,
  allRemoveItem,
  upCountItem,
  downCountItem,
  addItem,
} = basketSlice.actions;

export default basketSlice.reducer;
