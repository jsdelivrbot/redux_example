import { combineReducers } from 'redux';

const handleCounter = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT_COUNTER":
         
            return state + 1;

        case "DECREMENT_COUNTER":
         
            return state - 1;

        case "DRAW_RANDOM_NUMBER" :

            return action.random;

        default:

        return state;


    }


}

const rootReducer = combineReducers({

    count: handleCounter,

});

export default rootReducer;