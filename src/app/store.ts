import { configureStore } from '@reduxjs/toolkit';
import  dateChangingReducer  from '../features/dateState';
import changeModeReducer from '../features/panelModeState';
import panelPositionChanger from '../features/panelPosition';
import dateMode from '../features/dateMode';
import relativeData from '../features/relativeState'


export const store = configureStore({
  reducer: {
    dateChanger: dateChangingReducer,
    modeChanger: changeModeReducer,
    positionChanger: panelPositionChanger,
    dateModeChanger: dateMode,
    relativeDataChanger: relativeData
  },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;