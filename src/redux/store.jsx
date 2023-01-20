//Ya nueva configuracion de la store  del redux
// https://redux.js.org/usage/configuring-your-store
import { configureStore } from '@reduxjs/toolkit'
import ReduxThunk from "redux-thunk";
import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middlewares/logger';
//Importacion de todos los reducer utilizados en la tienda
import { rootReducer } from './rootReducer';
//state inicial de la tienda
export function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ReduxThunk],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [monitorReducersEnhancer]
  })
  //Recarga caliente para optimizar las recargas del redux
  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./reducer/authReducer', () => store.replaceReducer(rootReducer))
  // }
  return store
}