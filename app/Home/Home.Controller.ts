import { BaseController } from "../../utils/NextPageWrapper";
import { CaseReducerActions } from "@reduxjs/toolkit";
import { AppDispatch } from "../../utils/store";
import { GetState } from "../../meta/selectorProxy";
import type { HomeActionReducer } from "./reducer";
import type { State } from "./types";

export class Controller implements BaseController<State> {
  constructor(
    private reducer: CaseReducerActions<HomeActionReducer>,
    private dispatch: AppDispatch
  ) {}

  addItem(name: string) {
    this.dispatch(this.reducer.addItem({ title: name }));
    this.dispatch(this.reducer.setTitle({ value: "" }));
  }

  setEditMode(id: number){
    this.dispatch(this.reducer.changeEditMode({ id }))
  }

  setItemTitle(...[value, id]: [value: string] | [value: string, id: number]) {
    if (!id) {
      this.dispatch(this.reducer.setTitle({ value }));
      return;
    }
    this.dispatch(this.reducer.changeItemTitle({ title: value, id }));
  }

  @GetState("home")
  getState(data?: State) {
    return data;
  }

  
}
