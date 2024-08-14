//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { Set } from "../data";

export interface CurrentSets {
    public: Set[];
    private: Set[];
    saved: Set[];
    done: Set[];
    current: Set | null;
}

export interface Action {
    type: string;
    payload: Set;
}

export const initialState: CurrentSets = {
    public: [],
    private: [],
    saved: [],
    done: [],
    current: null
};