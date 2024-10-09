import { configureStore } from "@reduxjs/toolkit"

const initialState = {
  contacts: {
    items: []
  },
  filters: {
    name: ""
  }
}


const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return {
        ...state,
        items: state.items += action.payload,
      }

    case "contacts/deleteContact":
      return {
        ...state,
        items: state.items.filter(state => state.items.id !== action.payload.id),
      }

    default:
      return state;
  }
}

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case "filters/changeFilter":
      return {
        ...state,
        name: action.payload,
      }
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  }
})

