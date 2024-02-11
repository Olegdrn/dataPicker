import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface Position {
  side: 'left'| 'right'| 'none';
};

// Define the initial state using that type
const initialState: Position = {
  side: 'left'
};

export const changePanelPositionSlice = createSlice({
  name: 'panelPosition',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changePanelPosition: (state, action: PayloadAction<'left'| 'right' | 'none'>) => {
      state.side = action.payload;
    }
  },
});

export const { changePanelPosition } = changePanelPositionSlice.actions;


export default changePanelPositionSlice.reducer;