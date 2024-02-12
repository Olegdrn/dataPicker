import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface DateMode {
  DateMode: 'absolute'| 'relative' ;
};

// Define the initial state using that type
const initialState: DateMode = {
  DateMode: 'absolute'
};

export const changeDateModeSlice = createSlice({
  name: 'DateMode',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeDateMode: (state, action: PayloadAction<'absolute'| 'relative'>) => {
      state.DateMode = action.payload;
    }
  },
});

export const { changeDateMode } = changeDateModeSlice.actions;


export default changeDateModeSlice.reducer;