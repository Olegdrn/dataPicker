import { configureStore } from '@reduxjs/toolkit';
import  dateChangingReducer  from '../features/dateState';
import changeModeReducer from '../features/panelModeState'


export const store = configureStore({
  reducer: {
    dateChanger: dateChangingReducer,
    modeChanger: changeModeReducer
  },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;