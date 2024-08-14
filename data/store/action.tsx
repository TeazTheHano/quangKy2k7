//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { Set } from "../data";

export const CURRENT_SAVE_THE_SET = `CURRENT_SAVE_THE_SET`;
export const CURRENT_UNSAVE_THE_SET = `CURRENT_UNSAVE_THE_SET`;
export const CURRENT_SET_AS_CURRENT = `CURRENT_SET_AS_CURRENT`;
export const CURRENT_REMOVE_FROM_CURRENT = `CURRENT_REMOVE_FROM_CURRENT`;
export const CURRENT_SET_PUBLIC = `CURRENT_SET_PUBLIC`;
export const CURRENT_SET_PRIVATE = `CURRENT_SET_PRIVATE`;
export const CURRENT_SET_DONE = `CURRENT_SET_DONE`;

export const saveTheSet = (item: Set) => {
    return {
        type: CURRENT_SAVE_THE_SET,
        payload: item
    }
}

export const unsaveTheSet = (item: Set) => {
    return {
        type: CURRENT_UNSAVE_THE_SET,
        payload: item
    }
}

export const setAsCurrent = (item: Set) => {
    return {
        type: CURRENT_SET_AS_CURRENT,
        payload: item
    }
}

export const removeFromCurrent = (item: Set) => {
    return {
        type: CURRENT_REMOVE_FROM_CURRENT,
        payload: item
    }
}

export const setPublic = (item: Set) => {
    return {
        type: CURRENT_SET_PUBLIC,
        payload: item
    }
}

export const setPrivate = (item: Set) => {
    return {
        type: CURRENT_SET_PRIVATE,
        payload: item
    }
}

export const setDone = (item: Set) => {
    return {
        type: CURRENT_SET_DONE,
        payload: item
    }
}
