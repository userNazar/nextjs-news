import { configureStore } from "@reduxjs/toolkit";
import currentArticleSlicer from "./features/currentArticleSlicer";
import searchSlicer from "./features/searchSlicer";





export const store = configureStore({
    reducer: {
        currentArticlePage: currentArticleSlicer.reducer,
        searchMemo: searchSlicer.reducer
    }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch