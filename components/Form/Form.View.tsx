import React from "react";
import { ComponentView } from "../../utils/NextPageWrapper";
import { FormController } from "./Form.Controller";
import { State } from "./types";

const View: ComponentView<State, FormController> = ({ state, actions }) => {
  return <div>View</div>;
};

export default View;
