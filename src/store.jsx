import { configureStore } from "@reduxjs/toolkit";
import heroBannerReducer from "./Slices/HeroBannerSlice"
import navbarReducer from "./Slices/NavbarDataSlice"
import popularFoodReducer from "./Slices/PopularFoodSlice"
import sendWhatsAppReducer from "./Slices/Whatsapp"

export const store = configureStore({
      reducer:{
            heroBannerData:heroBannerReducer,
            navbar:navbarReducer,
            popularFood:popularFoodReducer,
            sendWhatsapp:sendWhatsAppReducer
      }
  });
  