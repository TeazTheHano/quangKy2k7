import { createContext } from "react";
import { CurrentSets, Action, } from "./index";
import { initialState } from "./initial";

const RootContext = createContext<[CurrentSets, React.Dispatch<Action>]>([initialState, () => null]);

export default RootContext;