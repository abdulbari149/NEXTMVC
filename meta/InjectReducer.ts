import { CaseReducerActions, SliceCaseReducers } from "@reduxjs/toolkit/src";

export const InjectReducer = function<A extends SliceCaseReducers<any>>(reducerKey: string){
    return function(target: any, propertyKey: any, paramterIndex: any){

    }
}