import React, { useReducer } from 'react';
import RootContext from "./context";
import { initialState, CurrentSets, Action, treeReducer } from './index';

function ProviderTotal({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer<React.Reducer<CurrentSets, Action>>(treeReducer, initialState);

    return (
        <RootContext.Provider value={[state, dispatch]}>
            {children}
        </RootContext.Provider>
    );
}

export default ProviderTotal;