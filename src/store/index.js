import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./root-reducer";
import thunk from "redux-thunk";
import axios from "axios";
import * as api from "../config";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";

const  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'countries']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(
	thunk.withExtraArgument({
	  client: axios,
	  api,
	})
  )
))

export const persistor = persistStore(store)