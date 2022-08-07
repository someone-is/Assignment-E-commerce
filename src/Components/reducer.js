export const reducer =(state, action) =>{
 
    if (action.type === "INCREASE") {
        const updatedCart = state.item.map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, no: curElem.no+1 };
          }
          return curElem;
        });
    
        return { ...state, item: updatedCart };
      }

      if (action.type === "DECERESE") {
        const updatedCart = state.item.map((curElem) => {
          if (curElem.id === action.payload) {
            if(curElem.no > 0){
            return { ...curElem, no: curElem.no-- };
        }
          }
          return curElem;
        });
    
        return { ...state, item: updatedCart };
      }
      if (action.type === "CARTDEC") {
        const updatedCart = state.item
          .map((curElem) => {
            if (curElem.id === action.payload) {
              return { ...curElem, no: curElem.no - 1 };
            }
            return curElem;
          })
          .filter((curElem) => curElem.no !== 0);
        return { ...state, item: updatedCart };
      }

      if (action.type === "TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce(
          (accum, curVal) => {
            let { mrp, no } = curVal;
    
            let updatedTotalAmount = mrp * no;
            accum.totalAmount += updatedTotalAmount;
    
            accum.totalItem =  accum.totalItem + no ;
            return accum;
          },
          {
            totalItem: 0,
            totalAmount: 0,
          }
        );
        return { ...state, totalItem, totalAmount };
      
      }
      
 return state;
};