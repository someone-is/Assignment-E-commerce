export const reducer = (state, action) => {
  console.log(state,action.type)
  if (action.type === "INCREASE") {
    const updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, no: curElem.no + 1 };
      }
      return curElem;
    });
    const updatedCart2 = state.item_cart.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, no: curElem.no + 1 };
      }
      return curElem;
    });

    return { ...state, item: updatedCart, item_cart: updatedCart2 };
  }

  if (action.type === "DECERESE") {

    const updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        if (curElem.no > 0) {
          return { ...curElem, no: curElem.no-- };
        }
        else if (curElem.no <= 0) {
          return{...curElem,no: 1};
        }
      }

      return curElem;
    });
    const updatedCarts = state.item_cart.map((curElems) => {
      if (curElems.id === action.payload) {
        if (curElems.no > 0) {
        return { ...curElems, no: curElems.no - 1 };
      }
      else if (curElems.no <= 0) {
        return{...curElems,no: 0};
      }
    }
      return curElems;
    })
      .filter((curElems) => curElems.no !== 0);
    return { ...state, item: updatedCart, item_cart: updatedCarts };
  }

  if (action.type === "TOTAL") {
    let { totalItem, totalAmount } = state.item_cart.reduce(
      (accum, curVal) => {
        let { ourprice, no } = curVal;

        let updatedTotalAmount = ourprice * no;
        accum.totalAmount += updatedTotalAmount;

        accum.totalItem = accum.totalItem + no;
        if(accum.totalItem<0){
          accum.totalItem=0;
        }
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };

  }

  if (action.type === "DELETE") {
    return {
      ...state, item_cart: state.item_cart.filter((thisit) => {
        return thisit.id !== action.payload;
      })
    };
  }
  return state;
};