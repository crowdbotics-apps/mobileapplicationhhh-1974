import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth546Reducer from '../features/EmailAuth546/redux/reducers';
import EmailAuth544Reducer from '../features/EmailAuth544/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth546: EmailAuth546Reducer,
EmailAuth544: EmailAuth544Reducer,
EmailAuth: EmailAuthReducer,

});