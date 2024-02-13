import { configureStore } from "@reduxjs/toolkit";
import dateChangingReducer from "../features/dateState";
import changeModeReducer from "../features/panelModeState";
import panelPositionChanger from "../features/panelPosition";
import dateMode from "../features/dateMode";

export const store = configureStore({
  reducer: {
    dateChanger: dateChangingReducer,
    modeChanger: changeModeReducer,
    positionChanger: panelPositionChanger,
    dateModeChanger: dateMode,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["currentDate/dateChanging"],
        ignoredPaths: ["dateChanger.currentDate"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
