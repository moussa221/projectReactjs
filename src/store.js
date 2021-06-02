import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./administration/profs/reducers/main";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
