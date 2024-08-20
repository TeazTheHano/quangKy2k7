//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { SetFormat, UserFormat } from "../data";
import { initialState, Action, } from "./index";
import { CURRENT_SET_SAVED, SAVE_USER_INFO, CURRENT_SAVE_THE_SET, CURRENT_UNSAVE_THE_SET, CURRENT_SET_AS_CURRENT, CURRENT_REMOVE_FROM_CURRENT, CURRENT_SET_PUBLIC, CURRENT_SET_PRIVATE, CURRENT_SET_DONE, CurrentSets, CURRENT_CLEAR_ALL_SET, CURRENT_CLEAR_PUBLIC, CURRENT_CLEAR_PRIVATE, CURRENT_CLEAR_DONE, CURRENT_CLEAR_SAVED, CURRENT_CLEAR_CURRENT, } from "./index";

export default function setReducer(state = initialState, action: Action): CurrentSets {
    switch (action.type) {
        //FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here
        case CURRENT_SAVE_THE_SET:
            return {
                ...state,
                saved: Array.isArray(action.payload) ? [...state.saved, ...action.payload] : [...state.saved, action.payload as SetFormat]
            };
        case CURRENT_UNSAVE_THE_SET:
            return {
                ...state,
                saved: state.saved.filter(item => item !== action.payload as SetFormat)
            };
        case CURRENT_SET_AS_CURRENT:
            return {
                ...state,
                current: Array.isArray(action.payload) ? null : action.payload as SetFormat
            };
        case CURRENT_REMOVE_FROM_CURRENT:
            return {
                ...state,
                current: null
            };
        case CURRENT_SET_PUBLIC:
            return {
                ...state,
                public: [...state.public, ...(Array.isArray(action.payload) ? action.payload : [action.payload as SetFormat])]
            };
        case CURRENT_SET_PRIVATE:
            return {
                ...state,
                private: [...state.private, ...(Array.isArray(action.payload) ? action.payload : [action.payload as SetFormat])]
            };
        case CURRENT_SET_DONE:
            return {
                ...state,
                done: Array.isArray(action.payload) ? [...state.done, ...action.payload] : [...state.done, action.payload as SetFormat]
            };
        case CURRENT_SET_SAVED:
            return {
                ...state,
                saved: Array.isArray(action.payload) ? action.payload : [action.payload as SetFormat]
            };
        case SAVE_USER_INFO:
            return {
                ...state,
                userInfo: action.payload as unknown as UserFormat
            };
        case CURRENT_CLEAR_ALL_SET:
            return {
                ...state,
                public: [],
                private: [],
                saved: [],
                done: [],
                current: null
            };
        case CURRENT_CLEAR_PUBLIC:
            return {
                ...state,
                public: []
            };
        case CURRENT_CLEAR_PRIVATE:
            return {
                ...state,
                private: []
            };
        case CURRENT_CLEAR_DONE:
            return {
                ...state,
                done: []
            };
        case CURRENT_CLEAR_SAVED:
            return {
                ...state,
                saved: []
            };
        case CURRENT_CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        default:
            return state;
    }
}
