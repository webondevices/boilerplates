import AppDispatcher from '../dispatchers/AppDispatcher.js';
import messageActions from '../constants/messageActions.js';

const messageActions = {
    sendMessage(message) {
        AppDispatcher.handleViewAction({
            type: messageActions.SEND_MESSAGE,
            message: message
        });
    }
};

export default messageActions;