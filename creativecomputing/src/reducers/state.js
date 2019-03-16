const initialState = {
  display:null
}

const newState = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DISPLAY':
      return Object.assign({}, state, {
        module: action.module,
      })

    default:
      return state
  }
}

export default newState
