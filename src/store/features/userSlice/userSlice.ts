import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../../types";

const initialUserState: UserState = {
  userName: "",
  avatar: "",
  enemies: [],
  friends: [],
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    logInUser: (
      currentUserState: UserState,
      action: PayloadAction<User>
    ): UserState => ({
      ...currentUserState,
      userName: action.payload.userName,
      token: action.payload.token,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const { logInUser: logInUserActionCreator } = userSlice.actions;
