import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Reducers/slice'
export default configureStore({
  reducer: {
    counter: counterReducer  },  
})