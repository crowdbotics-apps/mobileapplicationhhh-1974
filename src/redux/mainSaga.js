import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth546Saga from '../features/EmailAuth546/redux/sagas';
import EmailAuth544Saga from '../features/EmailAuth544/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth546Saga,
EmailAuth544Saga,
EmailAuthSaga,
    
  ]);
}