import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending](state, action) {},
    [fetchContacts.fulfilled](state, action) {},
    [fetchContacts.rejected](state, action) {},
    // Выполнится в момент старта HTTP-запроса

    // =============== Old ===============================
    // addContact: {
    //   reducer(state, action) {
    //     state.items.unshift(action.payload);
    //   },
    //   prepare(name, number) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name,
    //         number,
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, action) {
    //   const index = state.items.findIndex(
    //     contact => contact.id === action.payload
    //   );
    //   state.items.splice(index, 1);
    // },
    // ==============================================
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// export const { addContact, deleteContact } = contactsSlice.actions;
