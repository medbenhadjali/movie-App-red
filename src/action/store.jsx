// // import { crateStore } from "redux";
// import { createStore } from "redux";

// import moviereducer from "./reducer";
// const store = crateStore(
//   moviereducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export default store;


import {createStore} from "redux";
import moviereducer from './reducer';

 const store =createStore(moviereducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


 export default store ;
 