import { combineReducers } from 'redux';

// STATE
const NAP = "napping";
const EAT = "eating";
const PLAY = "playing";

const initialState = {
    activity: NAP
};


// ACTION
const ACTION_NAP = NAP;
const ACTION_EAT = EAT;
const ACTION_PLAY = PLAY;

export function nap() {
    return {
        type: ACTION_NAP
    };
}

export function eat() {
    return {
        type: ACTION_EAT
    };
}

export function play() {
    return {
        type: ACTION_PLAY
    }
}

window.nap = nap;
window.eat = eat;
window.play = play;


// REDUCER
export function activity(state=initialState.activity, action={type: ''}) {
    console.log(`oakley needs ${action.type}`);
    switch(action.type) {
        case ACTION_NAP:
            return NAP;
        break;
        case ACTION_EAT:
            return EAT;
        break;
        case ACTION_PLAY:
            return PLAY;
        break;
        default:
            return state;
        break;
    }
}

export const rootReducer = combineReducers({
    activity: activity
});