import AppDispatcher from './../dispatcher/AppDispatcher';
import messageActions from './../constants/actionTypes';
import actionSources from './../constants/actionSources';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'CHANGE';

class MessageStore extends EventEmitter {
    constructor() {
        super();
        this.messages = [];
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addNewMessage(message) {
        this.messages.push(message);
    }

    getMessages() {
        return this.messages;
    }
}

const messageStoreInstance = new MessageStore();

AppDispatcher.register(payload => {
    const action = payload.action;

    switch(action.type) {
        case messageActions.ADD_MESSAGE:
            messageStoreInstance.addNewMessage(action.message);
            break;
    }

    messageStoreInstance.emitChange();
});

export default messageStoreInstance;