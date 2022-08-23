import { NextPageWrapper } from "../utils/NextPageWrapper";
import * as Home from "../app/Home";
// TODO: a decorator that will Get the reducer into Controller
// TODO: injecting multiple controllers in a single view
export default NextPageWrapper({
  Controller: Home.Controller,
  View: Home.View,
  reducer: Home.actions,
  title: "Home",
});
