import { NewsArticle } from "@/models";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchElement = createAsyncThunk(
    'fetchData',
    async ({ countOfElements, searchValue }: { countOfElements: number, searchValue: string }) => {
        const response = await axios.get(`/api/search-news?q=${searchValue}&c=${countOfElements}`)
        return response.data;
    }
)


interface initialStateProps {
    searchResults: NewsArticle[],
    searchLoading: boolean,
    searchError: boolean,
    countOfElements: number,
    searchValue: string,
}

const initialState: initialStateProps = {
    searchResults: [],
    searchLoading: false,
    searchError: false,
    countOfElements: 10,
    searchValue: ''
}


const searchSlicer = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.searchValue = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchSearchElement.pending, (state) => {
            state.searchLoading = true;
        })
        builder.addCase(fetchSearchElement.fulfilled, (state, action) => {
            state.searchResults = action.payload;
            state.searchLoading = false;
        })
        builder.addCase(fetchSearchElement.rejected, state => {
            state.searchError = true;
        })
    }
})

export const {setSearch} = searchSlicer.actions;

export default searchSlicer;



