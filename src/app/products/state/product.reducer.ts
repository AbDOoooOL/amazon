import { createAction, createReducer, on } from "@ngrx/store";

export const productReducer = createReducer(
    {showProductCode:false},
    on(createAction('[Product] Toggle Product code'), state =>{
        console.log('Original State: ', state);
        return{
            ...state,
            showProductCode: !state.showProductCode
        };
    })
);