import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface Mode {
  panelMode: 'days'| 'months' | 'years';
};

// Define the initial state using that type
const initialState: Mode = {
  panelMode: 'days'
};

export const changePanelModeSlice = createSlice({
  name: 'panelMode',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changePanelMode: (state, action: PayloadAction<'days'| 'months' | 'years'>) => {
      state.panelMode = action.payload;
    }
  },
});

export const { changePanelMode } = changePanelModeSlice.actions;


export default changePanelModeSlice.reducer;