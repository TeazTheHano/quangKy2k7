//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { Desk, SetFormat, UserFormat } from "../data";

export const CURRENT_SET_ALL_SET = `CURRENT_SET_ALL_SET`;
export const CURRENT_CLEAR_ALL_SET = `CURRENT_CLEAR_ALL_SET`;

export const CURRENT_SAVE_THE_SET = `CURRENT_SAVE_THE_SET`;
export const CURRENT_UNSAVE_THE_SET = `CURRENT_UNSAVE_THE_SET`;

export const CURRENT_SET_AS_CURRENT = `CURRENT_SET_AS_CURRENT`;
export const CURRENT_REMOVE_FROM_CURRENT = `CURRENT_REMOVE_FROM_CURRENT`;
export const CURRENT_CLEAR_CURRENT = `CURRENT_CLEAR_CURRENT`;

export const CURRENT_SET_PUBLIC = `CURRENT_SET_PUBLIC`;
export const CURRENT_SET_PRIVATE = `CURRENT_SET_PRIVATE`;
export const CURRENT_SET_DONE = `CURRENT_SET_DONE`;
export const CURRENT_SET_SAVED = `CURRENT_SET_SAVED`;

export const CURRENT_SET_RE_PUBLIC = `CURRENT_SET_RE_PUBLIC`;
export const CURRENT_SET_RE_PRIVATE = `CURRENT_SET_RE_PRIVATE`;
export const CURRENT_SET_RE_SAVED = `CURRENT_SET_RE_SAVED`;

export const CURRENT_CLEAR_PUBLIC = `CURRENT_CLEAR_PUBLIC`;
export const CURRENT_CLEAR_PRIVATE = `CURRENT_CLEAR_PRIVATE`;
export const CURRENT_CLEAR_DONE = `CURRENT_CLEAR_DONE`;
export const CURRENT_CLEAR_SAVED = `CURRENT_CLEAR_SAVED`;

export const CURRENT_CLEAR_RE_PUBLIC = `CURRENT_CLEAR_RE_PUBLIC`;
export const CURRENT_CLEAR_RE_PRIVATE = `CURRENT_CLEAR_RE_PRIVATE`;
export const CURRENT_CLEAR_RE_SAVED = `CURRENT_CLEAR_RE_SAVED`;

export const CURRENT_CLEAR_CURRENT_DESK = `CURRENT_CLEAR_CURRENT_DESK`;
export const CURRENT_SET_CURRENT_DESK = `CURRENT_SET_CURRENT_DESK`;

export const SAVE_USER_INFO = `SAVE_USER_INFO`;

export const SAVE_NUMBER_OF_CARDS_NEED_TO_REVIEW_TODAY = `SAVE_NUMBER_OF_CARDS_NEED_TO_REVIEW_TODAY`;
export const SAVE_NUMBER_OF_CARDS_NEED_TO_MEMORIZE = `SAVE_NUMBER_OF_CARDS_NEED_TO_MEMORIZE`;
export const SAVE_NUMBER_OF_CARDS_REVIEWED_TODAY = `SAVE_NUMBER_OF_CARDS_REVIEWED_TODAY`;
export const SAVE_NUMBER_OF_CARDS_MEMORIZED = `SAVE_NUMBER_OF_CARDS_MEMORIZED`;

export const CURRENT_SAVE_ADD_TYPE = `CURRENT_SAVE_ADD_TYPE`;
export const CURRENT_SAVE_ADD_SETID = `CURRENT_SAVE_ADD_SETID`;
export const CURRENT_SAVE_ADD_DESKTITLE = `CURRENT_SAVE_ADD_DESKTITLE`;

export const saveTheSet = (item: SetFormat) => {
    return {
        type: CURRENT_SAVE_THE_SET,
        payload: item
    }
}

export const unsaveTheSet = (item: SetFormat) => {
    return {
        type: CURRENT_UNSAVE_THE_SET,
        payload: item
    }
}

export const setAsCurrent = (item: SetFormat) => {
    return {
        type: CURRENT_SET_AS_CURRENT,
        payload: item
    }
}

export const removeFromCurrent = (item: SetFormat) => {
    return {
        type: CURRENT_REMOVE_FROM_CURRENT,
        payload: item
    }
}

export const setPublic = (item: SetFormat[]) => {
    return {
        type: CURRENT_SET_PUBLIC,
        payload: item
    }
}

export const setPrivate = (item: SetFormat[]) => {
    return {
        type: CURRENT_SET_PRIVATE,
        payload: item
    }
}

export const setDone = (item: SetFormat[]) => {
    return {
        type: CURRENT_SET_DONE,
        payload: item
    }
}

export const setSaved = (item: SetFormat[]) => {
    return {
        type: CURRENT_SET_SAVED,
        payload: item
    }
}

export const saveUserInfo = (item: UserFormat) => {
    return {
        type: SAVE_USER_INFO,
        payload: item
    }
}

export const currentSetAllSet = (item: SetFormat[]) => {
    return {
        type: CURRENT_SET_ALL_SET,
        payload: item
    }
}

export const currentClearAllSet = () => {
    return {
        type: CURRENT_CLEAR_ALL_SET,
    }
}

export const currentClearPublic = () => {
    return {
        type: CURRENT_CLEAR_PUBLIC,
    }
}

export const currentClearPrivate = () => {
    return {
        type: CURRENT_CLEAR_PRIVATE,
    }
}

export const currentClearDone = () => {
    return {
        type: CURRENT_CLEAR_DONE,
    }
}

export const currentClearSaved = () => {
    return {
        type: CURRENT_CLEAR_SAVED,
    }
}

export const currentClearCurrent = () => {
    return {
        type: CURRENT_CLEAR_CURRENT,
    }
}

export const currentClearCurrentDesk = () => {
    return {
        type: CURRENT_CLEAR_CURRENT_DESK,
    }
}

export const currentSetCurrentDesk = (item: Desk) => {
    return {
        type: CURRENT_SET_CURRENT_DESK,
        payload: item
    }
}

export const saveNumberOfcardsNeedToReviewToday = (item: number) => {
    return {
        type: SAVE_NUMBER_OF_CARDS_NEED_TO_REVIEW_TODAY,
        payload: item
    }
}

export const saveNumberOfCardsNeedToMemorize = (item: number) => {
    return {
        type: SAVE_NUMBER_OF_CARDS_NEED_TO_MEMORIZE,
        payload: item
    }
}

export const saveNumberOfcardsReviewedToday = (item: number) => {
    return {
        type: SAVE_NUMBER_OF_CARDS_REVIEWED_TODAY,
        payload: item
    }
}

export const saveNumberOfCardsMemorized = (item: number) => {
    return {
        type: SAVE_NUMBER_OF_CARDS_MEMORIZED,
        payload: item
    }
}

// RE - Section
export const setRePublic = (item: SetFormat[]) => {
    return {
        type: CURRENT_SET_RE_PUBLIC,
        payload: item
    }
}

export const setRePrivate = (item: SetFormat[]) => {
    return {
        type: CURRENT_SET_RE_PRIVATE,
        payload: item
    }
}

export const setReSaved = (item: SetFormat[]) => {
    return {
        type: CURRENT_SET_RE_SAVED,
        payload: item
    }
}

export const currentClearRePublic = () => {
    return {
        type: CURRENT_CLEAR_RE_PUBLIC,
    }
}

export const currentClearRePrivate = () => {
    return {
        type: CURRENT_CLEAR_RE_PRIVATE,
    }
}

export const currentClearReSaved = () => {
    return {
        type: CURRENT_CLEAR_RE_SAVED,
    }
}

export const currentSaveAddType = (item: string) => {
    return {
        type: CURRENT_SAVE_ADD_TYPE,
        payload: item
    }
}

export const currentSaveAddSetID = (item: string) => {
    return {
        type: CURRENT_SAVE_ADD_SETID,
        payload: item
    }
}

export const currentSaveAddDeskTitle = (item: string) => {
    return {
        type: CURRENT_SAVE_ADD_DESKTITLE,
        payload: item
    }
}