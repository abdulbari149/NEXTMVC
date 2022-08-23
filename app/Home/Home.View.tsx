import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ComponentView } from "../../utils/NextPageWrapper";
import { Controller } from "./Home.Controller";
import { actions, reducer } from "./reducer";
import { Props, State } from "./types";

export const View: ComponentView<State, Controller> = ({ state, actions }) => {
  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={state.title}
        onChange={(e) => actions.setItemTitle(e.target.value)}
      />
      <button onClick={() => actions.addItem(state.title)}> Add </button>
      <ul>
        {state.items.map((item) =>
          !item.editMode ? (
            <li
              onDoubleClick={() => actions.setEditMode(item.id)}
              key={item.id}
            >
              <h5>{item.title}</h5>
            </li>
          ) : (
            <li key={item.id}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  actions.setEditMode(item.id);
                }}
              >
                <input
                  value={item.title}
                  onChange={(e) => {
                    actions.setItemTitle(e.target.value, item.id);
                  }}
                />
              </form>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
