import { createSlice } from '@reduxjs/toolkit';
import { plans } from '../data';


const initialState = plans;

export const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {

  },
});
export default plansSlice.reducer;
