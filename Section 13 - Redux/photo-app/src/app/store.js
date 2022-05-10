import photoReducer from 'features/Photo/photoSlice'
const { configureStore } = require("@reduxjs/toolkit");



const store = configureStore({
    reducer: {
        photos: photoReducer
    }
})

export default store