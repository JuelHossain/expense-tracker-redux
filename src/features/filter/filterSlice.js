import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: "all",
  search: "",
  page: 1,
  searchRef: null,
};

// create slice
const filterSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSearchRef: (state, action) => {
      state.searchRef = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    reset: (state, action) => {
      state.page = 1;
      state.selected = "all";
      state.search = "";
    },
  },
});

export default filterSlice.reducer;
export const { setPage, reset, setSelected, setSearch, setSearchRef } =
  filterSlice.actions;
