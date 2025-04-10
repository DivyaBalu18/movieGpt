// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "userSlice",
//   initialState: null,
//   reduceres: {
//     addUsers: (state, action) => action.payload,
//     removeUsers: () => null,
//   },
// });

// export default userSlice.reducer;

// export const {addUsers,removeUsers}=userSlice.actions

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;