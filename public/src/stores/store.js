import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import startupReducer from '../reducers/startupReducers'



var store


export default {

  configureStore: () => {

    var reducers = combineReducers({
      startupReducer : startupReducer
    })

    store = createStore(
        reducers,
        applyMiddleware(thunk)
    )

    return store

  },

  configureStore: () => {
    return store 
  }

}