import { createSlice } from "@reduxjs/toolkit";
import logo from "../assets/logo/05.png"
const initialState={
      send:[]
}

const sendWhatsAppSlice=createSlice({
      name:"sendWhatsapp",
      initialState,
      reducers:{

            sendMessage(state,action){
                  let phonenumber = "+919566665194";
                  const message = "Hello, I would like to place an order at your T2Dinner. can i get more details";
                  const encodedMessage = encodeURIComponent(message);
                
                  const url = `https://wa.me/${phonenumber}?text=${encodedMessage}`;
                  const newWindow = window.open(url, '_blank')
                  if (newWindow) {
                        newWindow.focus();  // Focus only if the new window was successfully opened
                      } else {
                        console.error("Failed to open WhatsApp link. Please check if popups are blocked.");
                      }

            }

      }
})

export default sendWhatsAppSlice.reducer
export const { sendMessage } = sendWhatsAppSlice.actions;