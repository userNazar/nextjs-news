import { NewsArticle } from "@/models";
import { createSlice } from "@reduxjs/toolkit";


interface initialStateProps {
    current: NewsArticle | null
}

const initialState: initialStateProps = {
    current: null
}

const currentArticleSlicer = createSlice({
    name: 'current',
    initialState,
    reducers: {
        setCurrentAriclePage: (state, action) => {
            state.current = action.payload
        }
    }
})


export const { setCurrentAriclePage } = currentArticleSlicer.actions

export default currentArticleSlicer