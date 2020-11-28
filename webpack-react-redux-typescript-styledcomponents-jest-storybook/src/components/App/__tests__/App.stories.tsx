import configureStore from 'redux-mock-store';
import * as React from 'react';
import {RootState} from '../../../reducers';
import App from '../App';

export default {title: 'App'};

const store = configureStore<Partial<RootState>>()({
  todos: {
    todoList: ['item'],
  },
});

export const component = () => <App store={store} />;
