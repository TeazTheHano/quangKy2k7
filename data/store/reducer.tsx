//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { Desk, SetFormat, UserFormat } from "../data";
import {
    initialState, Action,
    CurrentSets,
    CURRENT_SET_SAVED,
    SAVE_USER_INFO,
    CURRENT_SAVE_THE_SET,
    CURRENT_UNSAVE_THE_SET,
    CURRENT_SET_AS_CURRENT,
    CURRENT_REMOVE_FROM_CURRENT,
    CURRENT_SET_PUBLIC,
    CURRENT_SET_PRIVATE,
    CURRENT_SET_DONE,
    CURRENT_CLEAR_ALL_SET,
    CURRENT_CLEAR_PUBLIC,
    CURRENT_CLEAR_PRIVATE,
    CURRENT_CLEAR_DONE,
    CURRENT_CLEAR_SAVED,
    CURRENT_CLEAR_CURRENT,
    CURRENT_CLEAR_CURRENT_DESK,
    CURRENT_SET_CURRENT_DESK,
    SAVE_NUMBER_OF_CARDS_NEED_TO_REVIEW_TODAY,
    SAVE_NUMBER_OF_CARDS_NEED_TO_MEMORIZE,
    SAVE_NUMBER_OF_CARDS_REVIEWED_TODAY,
    SAVE_NUMBER_OF_CARDS_MEMORIZED,
    CURRENT_SET_ALL_SET,
    CURRENT_SET_RE_PUBLIC,
    CURRENT_SET_RE_PRIVATE,
    CURRENT_SET_RE_SAVED,
    CURRENT_CLEAR_RE_PUBLIC,
    CURRENT_CLEAR_RE_PRIVATE,
    CURRENT_CLEAR_RE_SAVED,
    CURRENT_SAVE_ADD_TYPE,
    CURRENT_SAVE_ADD_SETID,
    CURRENT_SAVE_ADD_DESKTITLE
} from "./index";

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
        case CURRENT_SET_ALL_SET:
            return {
                ...state,
                all: Array.isArray(action.payload) ? action.payload : [action.payload as SetFormat]
            };
        case CURRENT_CLEAR_ALL_SET:
            return {
                ...state,
                all: [],
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
        case CURRENT_CLEAR_CURRENT_DESK:
            return {
                ...state,
                currentDesk: null
            };
        case CURRENT_SET_CURRENT_DESK:
            return {
                ...state,
                currentDesk: action.payload as Desk
            };
        case SAVE_NUMBER_OF_CARDS_NEED_TO_REVIEW_TODAY:
            return {
                ...state,
                cardsNeedToReviewToday: action.payload as number
            };
        case SAVE_NUMBER_OF_CARDS_NEED_TO_MEMORIZE:
            return {
                ...state,
                cardsNeedToMemorize: action.payload as number
            };
        case SAVE_NUMBER_OF_CARDS_REVIEWED_TODAY:
            return {
                ...state,
                cardsReviewedToday: action.payload as number
            };
        case SAVE_NUMBER_OF_CARDS_MEMORIZED:
            return {
                ...state,
                cardsMemorized: action.payload as number
            };

        // RE - Section
        case CURRENT_SET_RE_PUBLIC:
            return {
                ...state,
                rePublic: action.payload as SetFormat[]
            };
        case CURRENT_SET_RE_PRIVATE:
            return {
                ...state,
                rePrivate: action.payload as SetFormat[]
            };
        case CURRENT_SET_RE_SAVED:
            return {
                ...state,
                reSaved: action.payload as SetFormat[]
            };
        case CURRENT_CLEAR_RE_PUBLIC:
            return {
                ...state,
                rePublic: []
            };
        case CURRENT_CLEAR_RE_PRIVATE:
            return {
                ...state,
                rePrivate: []
            };
        case CURRENT_CLEAR_RE_SAVED:
            return {
                ...state,
                reSaved: []
            };
        case CURRENT_SAVE_ADD_TYPE:
            return {
                ...state,
                addType: action.payload as string
            }
        case CURRENT_SAVE_ADD_SETID:
            return {
                ...state,
                addSetID: action.payload as string
            }
        case CURRENT_SAVE_ADD_DESKTITLE:
            return {
                ...state,
                addDeskTitle: action.payload as string
            }
        default:
            return state;
    }
}
