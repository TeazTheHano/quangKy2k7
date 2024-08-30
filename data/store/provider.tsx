import React, { useReducer } from 'react';
import RootContext from "./context";
import { initialState, CurrentSets, Action, setReducer } from './index';

function ProviderTotal({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer<React.Reducer<CurrentSets, Action>>(setReducer, initialState);

    return (
        <RootContext.Provider value={[state, dispatch]}>
            {children}
        </RootContext.Provider>
    );
}

export default ProviderTotal;