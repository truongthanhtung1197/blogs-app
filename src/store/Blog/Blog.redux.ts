import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
    blogList: []
};

const blogSlice = createSlice({
    initialState,
    name: 'Blog',
    reducers: {
        getBlogsRequest(state, action: PayloadAction<string>) {
            //
        }
    }
});

export const AppSelectors = {};

export const BlogActions = blogSlice.actions;
export const BlogReducer = blogSlice.reducer;
