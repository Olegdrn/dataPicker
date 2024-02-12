import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface RelativeDate {
  value: number;
  operation:string;
};

// Define the initial state using that type
const initialState: RelativeDate = {
  value: 0,
  operation:""
};

export const relativeDateSlice = createSlice({
  name: 'relativeDate',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    relativeValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    relativeOperation: (state, action: PayloadAction<string>) => {
      state.operation = action.payload;
    }
  },
});

export const { relativeValue, relativeOperation } = relativeDateSlice.actions;


export default relativeDateSlice.reducer;