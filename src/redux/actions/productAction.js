// import { productActions } from "../reducers/productSlice";

// function getProduct(searchQuery) {
//   return async (dispatch, getState) => {
//     let url = `https://my-json-server.typicode.com/nicetomimi/hnm-project/products?q=${searchQuery}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
//     dispatch(productActions.getAllProduct({data}))
//   };
// }

// function getProductDetail(id) {
//     return async (dispatch, getState) => {
//       let url = `https://my-json-server.typicode.com/nicetomimi/hnm-project/products?${id}`;
//       let response = await fetch(url);
//       let data = await response.json();
//       dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
//     };
//   }

// export const productAction = { getProductDetail };
