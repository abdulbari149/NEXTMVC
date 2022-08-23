import * as Home from "./../app/Home/reducer";
import { configureStore, ThunkAction, Action, Store } from "@reduxjs/toolkit";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";

const makeStore: MakeStore<Store> = (context) => {
  const reducer = {
    home: Home.reducer,
  }

  // const ActionMapper = new Map()
  // ActionMapper.get()
  const store = configureStore({
    reducer,
    devTools: true,
  });
  console.log()
  return store
}
  

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: true
});
