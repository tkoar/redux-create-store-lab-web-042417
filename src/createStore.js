import candyReducer from './reducers/candyReducer'
import countReducer from './reducers/candyReducer'

export default function createStore(reducer) {

  let state

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  function getState() {
    return state
  }

  dispatch({type: "@@INIT"})

  function render() {
    const container = document.getElementById('container');
  }

  return ({ dispatch, getState })

}
