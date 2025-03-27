import { createSlice } from "@reduxjs/toolkit";
import item1 from "../assets/bestfood/item1.png"
import item2 from "../assets/bestfood/item2.png"
import item3 from "../assets/bestfood/item3.png"
import item4 from "../assets/bestfood/item4.png"

const initialState = {
  popularFoodDatas: [
    { id: 1, label: "Egg and Cucumber", img:item1, price:"The Registration Fee",fee:"30.99"},
    { id: 2, label: "Chicken Leg Piece",  img:item2, price:"The Registration Fee",fee:"40.99"},
    { id: 3, label: "Chicken Fried Rice", img:item3, price:"The Registration Fee",fee:"50.99"},
    { id: 4, label: "Chicken Pizza",  img:item4, price:"The Registration Fee",fee:"60.99"},
  ],
};

const popularFoodSlice = createSlice({
  name: "popularFood",
  initialState,
  reducers: {},
});

export default popularFoodSlice.reducer;
export const popularFoodData = (state) => state.popularFood.popularFoodDatas;
