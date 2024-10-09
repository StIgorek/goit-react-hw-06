import { createSlice } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.items;

const slice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload)
    },
    deleteContact: (state, action) => {
      state.items.filter(state => state.items.id !== action.payload.id)
    }
  }
})

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;


