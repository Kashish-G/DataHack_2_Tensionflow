import alanBtn from "@alan-ai/alan-sdk-web";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/ContextProvider";
const alankey =
  "79ed0304bb95cd22f793ccf062512ba02e956eca572e1d8b807a3e2338fdd0dc/stage";

const COMMANDS = {
  OPEN_HOME: "open-home",
  OPEN_SHOP: "open-shop",
  OPEN_ORDER: "open-order",
  OPEN_CART: "open-cart",
  ADD_PRODUCT: "add-product",
  SHOW_INVENTORY: "show-inventory",
  LOG_OUT: "log-out",
};

export default function UseAlan() {
  const [alanInstance, setAlanInstance] = useState();
  const { role } = useContext(Context);

  const navigateToPage = (pageName) => {
    window.location.href = `/${pageName}`;
  };

  function openCart() {
    console.log("logout ");
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    localStorage.removeItem("role");
  }
  useEffect(() => {
    if (alanInstance != null) return;
    setAlanInstance(
      alanBtn({
        key: alankey,
        onCommand: ({ command }) => {
          console.log("hello")
          if (command === COMMANDS.OPEN_SHOP) {
            navigateToPage("shop");
          }
          if (command === COMMANDS.OPEN_HOME) {
            console.log(command)
            navigateToPage("/");
          }
          if (command === COMMANDS.ADD_PRODUCT) {
            navigateToPage("addProduct");
          }
          if (command === COMMANDS.SHOW_INVENTORY) {
            navigateToPage("inventory");
          }
          if (command === COMMANDS.OPEN_CART) {
            navigateToPage("cart");
          }
          if (command === COMMANDS.LOG_OUT) {
            openCart();
            navigateToPage("login");
          }
          if (command === COMMANDS.OPEN_ORDER) {
            navigateToPage("status");
          }
        },
      })
    );
  }, []);
}