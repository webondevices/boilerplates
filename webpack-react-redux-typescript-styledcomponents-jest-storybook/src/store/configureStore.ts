import {createStore, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {rootReducer, RootState} from '../reducers';

const configureStore = (initialState: Partial<RootState>) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant()),
  );
};

export default configureStore;
