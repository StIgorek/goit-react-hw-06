import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.name.value;

const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload
    },
  }
})

export const { changeFilter } = slice.actions;
export default slice.reducer;

//changeFilter - зміна значення фільтра в властивості name
//Оголоси функції-селектори для використання в useSelector:
//selectNameFilter - повертає значення фільтра з властивості name.
