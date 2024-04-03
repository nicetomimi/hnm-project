import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectItem: null,
  isLoading : false, //로딩스피너
  error : null, //에러
};

export const getProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try{
      let url = `https://my-json-server.typicode.com/nicetomimi/hnm-project/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    }catch(error){
      thunkApi.rejectWithValue(error.message)
    }
  }
);

export const getProductDetailOne = createAsyncThunk(
  "product/fetchSingle",
  async (id, thunkApi) => {
    try{
      let url = `https://my-json-server.typicode.com/nicetomimi/hnm-project/products?${id}`;
      let response = await fetch(url);
      return await response.json();
    }catch(error){
      thunkApi.rejectWithValue(error.message)
    }
  }
)

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      }) //data 오는중이다 (로딩스피너)
      .addCase(getProductDetailOne.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state,action) => {
        state.isLoading = false
        state.productList = action.payload
      }) // data 성공적으로 왔다
      .addCase(getProductDetailOne.fulfilled, (state,action)=>{
        state.isLoading = false
        state.selectItem = action.payload
      })
      .addCase(getProducts.rejected, (state,action) => {
        state.isLoading = false
        state.error = action.payload
      }) // 오류
      .addCase(getProductDetailOne.rejected, (state,action)=>{
        state.isLoading = false
        state.error = action.payload
      })
  },
});

console.log("ppp", productSlice);

export default productSlice.reducer;
export const productActions = productSlice.actions;

// function productReducer (state=initialState, action) {
//   let {type, payload} = action
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS" :
//         return {...state, productList:payload.data}

//     case "GET_SINGLE_PRODUCT_SUCCESS" :
//         return {...state, selectItem:payload.data}

//     default:
//         return {...state}
//   }
// }

// export default productReducer
