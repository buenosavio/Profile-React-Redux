import { createStore } from "redux";
import rootReducers from './reducers';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducers, reduxDevTools);

export default store;