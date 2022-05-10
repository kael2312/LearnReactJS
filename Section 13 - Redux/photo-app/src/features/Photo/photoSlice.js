import { createSlice } from "@reduxjs/toolkit";

const photo = createSlice({
    name: 'photos',
    initialState: [],
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        deletePhoto: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            state.splice(index, 1)
        },
        updatePhoto: (state, action) => {
            console.log("update: ", action.payload.id);
            const foundPhoto = state.forEach(x => {
                console.log(x.id);
            })
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index >= 0 ) {
                state[index] = action.payload
            }
        }
    }
});

const { reducer, actions } = photo;
export const { addPhoto, deletePhoto, updatePhoto } = actions;
export default reducer