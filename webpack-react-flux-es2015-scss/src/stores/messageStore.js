import AppDispatcher from '../dispatchers/AppDispatcher.js';
import messageActions from '../constants/messageActions.js';
import actionSources from '../constants/actionSources';
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
}

const messageStoreInstance = new MessageStore();

AppDispatcher.register(payload => {
    const action = payload.action;

    switch(action.type) {
        case messageActions.SEND_MESSAGE:
            this.messages.push(action.message);
            break;
    }

    messageStoreInstance.emitChange();
});

export default messageStoreInstance;