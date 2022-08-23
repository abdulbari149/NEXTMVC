import { HomeActionReducer } from "./../../app/Home/reducer";
import type { CaseReducerActions } from "@reduxjs/toolkit";
import { GetState } from "../../meta/selectorProxy";
import { BaseController } from "../../utils/NextPageWrapper";
import { InjectReducer } from "../../meta/InjectReducer";
import { State } from "./types";

export class FormController implements BaseController<State> {
  constructor(
    @InjectReducer("form") reducer: CaseReducerActions<HomeActionReducer>
  ) {}
  @GetState("home")
  getState(data?: State | undefined) {}
}
