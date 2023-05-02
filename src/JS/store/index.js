import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const DataProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default DataProvider;
// const store = createStore(rootReducer, 
//     {}, 
//     //composeWithDevTools(applyMiddleware(logger))
//      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//      );
// export default store;
// import { createStore } from 'redux'
// import rootReducer from '../Reducers/rootReducer'

// const store = createStore(rootReducer)
// export default store;
