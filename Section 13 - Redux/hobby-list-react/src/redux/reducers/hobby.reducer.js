const initialState = {
    list: [],
    activeId: null
}

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            const newState = [...state.list]
            newState.push(action.payload)
            return {
                ...state,
                list: newState
            }

        case 'SET_ACTIVE_HOBBY':
            const newActiveId = action.payload.id;
            return {
                ...state,
                activeId: newActiveId
            }
    
        default:
            break;
    }
    return state
}

export default hobbyReducer