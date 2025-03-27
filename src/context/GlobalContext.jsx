import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

export const initalState = () =>
  localStorage.getItem("phone")
    ? JSON.parse(localStorage.getItem("phone"))
    : { cart: [], totalPrice: 0, totalAmount: 0 };



const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((d) => {
          if (d.id == payload) {
            if (d.amount >= d.stock) {
              return d;
            }
            return { ...d, amount: d.amount + 1 };
          }
          return d;
        }),
      };
    case "DECREMENT":
      return {
        ...state,
        cart: state.cart.map((d) => {
          if (d.id == payload) {
            return { ...d, amount: d.amount - 1 };
          } else {
            return d;
          }
        }),
      };
    case "DELETE":
      return {
        ...state,
        cart: state.cart.filter((d) => d.id !== payload),
      };
    case "DELETE_ALL":
      
      return { ...state,
       cart: []};

      // case "CALCULATE_TOTAL":
      //   const { totalAmount, totalPrice } = state.cart.reduce(
      //     (acc, item) => {
      //       acc.totalAmount += item.amount;
      //       acc.totalPrice += item.amount * item.price;
      //       return acc;
      //     },
      //     { totalAmount: 0, totalPrice: 0 }
      //   );
      //   return { ...state, totalAmount, totalPrice };

    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState());
  useEffect(() => {
    if (state.cart) {
      dispatch({
        type: "CALCULATE_TOTAL",
      });
    }
  }, [state.cart]);
  useEffect(() => {
    localStorage.setItem("phone", JSON.stringify(state));
  }, [state]);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
