import {Dispatcher} from 'flux';
import actionSources from './../constants/actionSources';

class AppDispatcher extends Dispatcher {
    handleViewAction(action) {
        this.dispatch({
            source: actionSources.VIEW_ACTION,
            action: action
        });
    }
}

export default new AppDispatcher();