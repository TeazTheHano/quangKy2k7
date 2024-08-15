//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { Set } from "../data";
import { initialState, Action, CurrentSets, CURRENT_SET_SAVED, } from "./index";
import { CURRENT_SAVE_THE_SET, CURRENT_UNSAVE_THE_SET, CURRENT_SET_AS_CURRENT, CURRENT_REMOVE_FROM_CURRENT, CURRENT_SET_PUBLIC, CURRENT_SET_PRIVATE, CURRENT_SET_DONE } from "./index";

export default function treeReducer(state = initialState, action: Action): CurrentSets {
    switch (action.type) {
        //FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here
        case CURRENT_SAVE_THE_SET:
            return {
                ...state,
                saved: Array.isArray(action.payload) ? [...state.saved, ...action.payload] : [...state.saved, action.payload]
            };
        case CURRENT_UNSAVE_THE_SET:
            return {
                ...state,
                saved: state.saved.filter(item => item !== action.payload)
            };
        case CURRENT_SET_AS_CURRENT:
            return {
                ...state,
                current: Array.isArray(action.payload) ? null : action.payload
            };
        case CURRENT_REMOVE_FROM_CURRENT:
            return {
                ...state,
                current: null
            };
        case CURRENT_SET_PUBLIC:
            return {
                ...state,
                public: [...state.public, ...(Array.isArray(action.payload) ? action.payload : [action.payload])]
            };
        case CURRENT_SET_PRIVATE:
            return {
                ...state,
                private: [...state.private, ...(Array.isArray(action.payload) ? action.payload : [action.payload])]
            };
        case CURRENT_SET_DONE:
            return {
                ...state,
                done: Array.isArray(action.payload) ? [...state.done, ...action.payload] : [...state.done, action.payload]
            };
        case CURRENT_SET_SAVED:
            return {
                ...state,
                saved: Array.isArray(action.payload) ? action.payload : [action.payload]
            };
        default:
            return state;
    }
}
