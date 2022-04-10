// Copy on react playground

import React, { useReducer, createContext, useContext } from "../react-lib/react.development"
const initialState = {}

// Create App Context
export const Context = createContext(initialState)
export const Provider = ({ children, reducers }) => {
  const defaultState = reducers(undefined, initialState)
  if (defaultState === undefined) {
    throw new Error("reducer's should not return undefined")
  }
  const [state, dispatch] = useReducer((_state, _action) => {
    return reducers(_state, _action)
  }, defaultState)
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}
export const useDispatch = () => useContext(Context).dispatch
export const useSelector = (callback) => {
  const state = { ...useContext(Context).state }
  return callback ? callback(state) : state
}

// Connect react app to above created Provider
const actionMap = {
  INCREMENT: (state, action) => ({ ...state, count: state.count + 1 }),
  DECREMENT: (state, action) => ({ ...state, count: state.count - 1 }),
}

const countReducer = (state = { count: 0 }, action) => {
  const exec = actionMap[action.type]
  return exec ? exec(state, action) : state
}

const reducers = { countReducer }
const App = () => (
  <Provider reducers={reducers}>
    <Component />
  </Provider>
)

// Connect component to react Context
const Component = () => {
  const dispatch = useDispatch()
  const { count } = useSelector((state) => state.countReducer)
  return <h3>Context State: {count} </h3>
}

// Combine reducer
export const combineReducers = (reducers) => {
  const entries = Object.entries(reducers)
  return (state = {}, action) => {
    return entries.reduce((_state, [key, reducer]) => {
      _state[key] = reducer(state[key], action)
      return _state
    }, {})
  }
}

ReactDOM.render(<App />, app)
