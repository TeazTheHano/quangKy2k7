//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import User from "../../screens/User";
import { Desk, SetFormat, UserFormat } from "../data";

export interface CurrentSets {
    all: SetFormat[];
    public: SetFormat[];
    private: SetFormat[];
    saved: SetFormat[];
    done: SetFormat[];
    current: SetFormat | null;
    userInfo: UserFormat | null;
    currentDesk: Desk | null;
    cardsNeedToReviewToday: number;
    cardsNeedToMemorize: number;
    cardsReviewedToday: number;
    cardsMemorized: number;
}

export interface Action {
    type: string;
    payload?: SetFormat | SetFormat[] | UserFormat | Desk | number;
}

export const initialState: CurrentSets = {
    all: [],
    public: [],
    private: [],
    saved: [],
    done: [],
    current: null,
    userInfo: null,
    currentDesk: null,
    cardsNeedToReviewToday: 0,
    cardsNeedToMemorize: 0,
    cardsReviewedToday: 0,   
    cardsMemorized: 0,
};