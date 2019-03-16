const initialState = {
  display:false,
  module:null
}

const newState = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DISPLAY':
      return Object.assign({}, state, {
        module: action.module,
        display: action.display
      })

    default:
      return state
  }
}

export default newState
