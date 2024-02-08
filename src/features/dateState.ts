import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface currentDate {
  currentDate: Date;
};

// Define the initial state using that type
const initialState: currentDate = {
  currentDate: new Date()
};

export const dateChangingSlice = createSlice({
  name: 'currentDate',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    dateChanging: (state, action: PayloadAction<Date>) => {
      state.currentDate = action.payload;
    }
  },
});

export const { dateChanging } = dateChangingSlice.actions;


export default dateChangingSlice.reducer;