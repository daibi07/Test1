import React, {useContext} from 'react';
import {store} from "../store";

function Overview() {
    const {state, dispatch} = useContext(store);

    return <div>
        <p>{state.count}</p>
        <button onClick={() => dispatch({type: 'increment'})}>add</button>
    </div>;
}

export default Overview;
