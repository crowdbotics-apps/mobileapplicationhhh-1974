import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';
import EmailAuth544Reducer from '../features/EmailAuth544/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth: EmailAuthReducer,
EmailAuth544: EmailAuth544Reducer,
EmailAuth: EmailAuthReducer,

});