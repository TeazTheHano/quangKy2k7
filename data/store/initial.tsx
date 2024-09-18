//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import User from "../../screens/User";
import { Desk, SetFormat, UserFormat } from "../data";

export interface CurrentSets {
    all: SetFormat[];
    public: SetFormat[];
    rePublic: SetFormat[];
    private: SetFormat[];
    rePrivate: SetFormat[];
    saved: SetFormat[];
    reSaved: SetFormat[];
    done: SetFormat[];
    current: SetFormat | null;
    userInfo: UserFormat | null;
    currentDesk: Desk | null;
    cardsNeedToReviewToday: number;
    cardsNeedToMemorize: number;
    cardsReviewedToday: number;
    cardsMemorized: number;
    addType?: string;
    addSetID?: string;
    addDeskTitle?: string;
}

export interface Action {
    type: string;
    payload?: SetFormat | SetFormat[] | UserFormat | Desk | number | string | null;
}

export const initialState: CurrentSets = {
    all: [],
    public: [],
    rePublic: [],
    private: [],
    rePrivate: [],
    saved: [],
    reSaved: [],
    done: [],
    current: null,
    userInfo: null,
    currentDesk: null,
    cardsNeedToReviewToday: 0,
    cardsNeedToMemorize: 0,
    cardsReviewedToday: 0,
    cardsMemorized: 0,
    addType: '',
    addSetID: '',
    addDeskTitle: '',
};