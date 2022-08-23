import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Action, CaseReducerActions, Dispatch, Reducer, SliceCaseReducers, ValidateSliceCaseReducers } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./store";
export interface BaseController<State extends {}> {
	getState(data?: State): any
}

export interface ViewProps<State extends {}, Actions, Other = any> {
	state: State;
	actions: Actions;
	extra?: Other;
}

export type ComponentView<State extends {}, IController, Extras = any> = React.FC<ViewProps<State, IController, Extras>>
export type ComponentReducer<State extends {}, Actions extends SliceCaseReducers<State>> = CaseReducerActions<Actions>

interface Props<State extends {}, Actions extends SliceCaseReducers<State>, IController, Extras = any> {
	Controller: new (reducer: ComponentReducer<State, Actions>, dispatch: AppDispatch) => IController;
	View: ComponentView<State, IController, Extras>;
	title: string;
	reducer: ComponentReducer<State, Actions>
	getInitialProps?: GetStaticProps;
}


export function NextPageWrapper<S extends {}, C extends BaseController<S>, A extends SliceCaseReducers<S>, E = any>({
	title,
	View,
	Controller,
	reducer
}: Props<S, A, C, E>): NextPage {
	return () => {
		const dispatch: AppDispatch = useDispatch()
		const controller = new Controller(reducer, dispatch);
		return (
			<>
				<Head>
					<title>{title}</title>
				</Head>
				<View state={controller.getState()} actions={controller} />
			</>
		);
	};
}
