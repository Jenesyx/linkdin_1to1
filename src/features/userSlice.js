import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    login: (state, action) => {

      state.value += action.payload; 
    },
    logout: (state) => { 
      state.user = null;
    },
  },

});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.counter.value;

export default userSlice.reducer;