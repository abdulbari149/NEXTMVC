import { PayloadAction } from '@reduxjs/toolkit';
import { Action } from "@reduxjs/toolkit";

export interface Item {
	title: string;
	id: number;
	editMode: boolean;
}

export interface State {
	title: string;
	items: Item[];
}

export interface Props {
	state: State;
	actions: Actions;
}

export interface BaseActions {
		addItem(state: State, action: PayloadAction<any>): void	
}

export interface Actions extends Action, BaseActions {}

