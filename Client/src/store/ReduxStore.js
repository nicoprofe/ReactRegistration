import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";

import thunk from 'redux-thunk'

import { reducers } from "../reducers";

function saveToLocalStorage(store){
    try {
        const serializedStore = JSON.stringify(store)
        window.localStorage.setItem('store', serializedStore)
    } catch (error) {
        console.log(error)
    }
}

function loadFromLocalStorage(){
    try {
        const serializedStore = window.localStorage.getItem('store')
        if(serializedStore === null) return undefined
        return JSON.parse(serializedStore)
    } catch (error) {
        console.log(error)
    }
}

const composeEnhancers = window._REDUX_DEVTOOLS_EXTERNSION_COMPOSE || compose
const persistedState = loadFromLocalStorage()

const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk)))
store.subscribe(()=>saveToLocalStorage(store.getState()))

export default store