import AppDispatcher from './../dispatcher/AppDispatcher';
import actionTypes from './../constants/actionTypes';

const messageActions = {
    addMessage(message) {
        AppDispatcher.handleViewAction({
            type: actionTypes.ADD_MESSAGE,
            message: message
        });
    }
};

export default messageActions;