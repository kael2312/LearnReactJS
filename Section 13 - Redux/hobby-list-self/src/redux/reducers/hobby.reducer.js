const initialState = {
    list: [],
    activeID: null
}

export const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_HOBBY":
            const newHobbyList = [...state.list]
            newHobbyList.push(action.payload)
            return {
                ...state,
                list: newHobbyList
            }
        case "SET_ACTIVE_HOBBY":
            return{
                ...state,
                activeID: action.payload.id
            }

        default:
            break;
    }
    return state
    
};
