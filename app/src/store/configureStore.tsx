// `compose` allows middleware to be added
import { createStore, combineReducers, compose } from 'redux';
import {
	profileReducer,
	bookmarksReducer
} from './reducers';

// // https://www.mydatahack.com/getting-redux-devtools-to-work-with-typescript/
// declare global {
//   interface IWindow {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

const appReducer = combineReducers({
	profiles: profileReducer,
	bookmarks: bookmarksReducer,
})

const rootReducer = (state, action) => {
	return appReducer(state, action);
}

/**
 * start of React Native Debugger setup
 * https://github.com/jhen0409/react-native-debugger
 */
let composeEnhancers = compose;

// only works when in dev mode
if (__DEV__){
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
/**
 * end of React Native Debugger setup
 */

const configureStore = () => {
	return createStore(rootReducer, composeEnhancers())
}

export default configureStore;