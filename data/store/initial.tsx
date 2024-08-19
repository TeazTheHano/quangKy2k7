//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import User from "../../screens/User";
import { SetFormat, UserFormat } from "../data";

export interface CurrentSets {
    public: SetFormat[];
    private: SetFormat[];
    saved: SetFormat[];
    done: SetFormat[];
    current: SetFormat | null;
    userInfo: UserFormat | null;
}

export interface Action {
    type: string;
    payload: SetFormat | SetFormat[] | UserFormat;
}

export const initialState: CurrentSets = {
    public: [],
    private: [],
    saved: [],
    done: [],
    current: null,
    userInfo: null
};