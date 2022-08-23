import {
  CaseReducerActions,
  ValidateSliceCaseReducers,
} from "./../../node_modules/@reduxjs/toolkit/src/createSlice";
import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
  Reducer,
} from "@reduxjs/toolkit";
import { Actions, Item, State } from "./types";

// export const reducer: Reducer<State, Actions> = (state, action) => {
//     return state
// }
export type HomeActionReducer = ValidateSliceCaseReducers<
  State,
  {
    addItem(state: State, action: PayloadAction<{ title: string }>): void;
    setTitle(state: State, action: PayloadAction<{ value: string }>): void;
    changeEditMode(state: State, action: PayloadAction<{ id: number }>): void;
    changeItemTitle(
      state: State,
      action: PayloadAction<{ title: string; id: number }>
    ): void;
  }
>;

export const slice = createSlice<State, HomeActionReducer>({
  name: "home",
  initialState: {
    items: [],
    title: "",
  } as State,
  reducers: {
    addItem(state, action) {
      state.items.push({
        id: state.items.length + 1,
        title: action.payload.title,
        editMode: false,
      });
    },
    setTitle(state, action) {
      state.title = action.payload.value;
    },
    changeEditMode(state, action) {
      const item = state.items.find((i) => action.payload.id === i.id);
      if (!item || item === undefined) {
        return;
      }
      item.editMode = !item.editMode;
    },
    changeItemTitle(state, action) {
      const item = state.items.find((i) => action.payload.id === i.id);
      if (!item || item === undefined) {
        return;
      }
      item.title = action.payload.title;
    },
  },
});
// export type
export const reducer = slice.reducer;
export const actions = slice.actions;
