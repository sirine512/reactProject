import { configureStore } from '@reduxjs/toolkit';
import toursReducer from './toursSlice';
import destinationReducer from './destSlice'
import plansReducer from './plansSlice'

export const store = configureStore({
    reducer: {destination:destinationReducer,tours:toursReducer,plans:plansReducer},
  })