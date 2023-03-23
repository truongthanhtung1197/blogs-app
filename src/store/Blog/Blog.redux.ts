import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterGetBlogList } from 'types/blog.type';
import { IBlog } from './../../types/blog.type';

export const initialState = {
    blog: {} as IBlog,
    isLoadingGetBlog: false,
    blogList: [] as IBlog[],
    isLoadingGetBlogList: false
};

const blogSlice = createSlice({
    initialState,
    name: 'Blog',
    reducers: {
        getBlogsRequest(state, action: PayloadAction<IFilterGetBlogList>) {
            state.isLoadingGetBlogList = true;
        },
        getBlogsSuccess(state, action: PayloadAction<IBlog[]>) {
            state.blogList = action.payload;
            state.isLoadingGetBlogList = false;
        },
        getBlogsFail(state) {
            state.isLoadingGetBlogList = false;
        },
        getBlogsDetailRequest(state, action: PayloadAction<number>) {
            state.isLoadingGetBlog = true;
        },
        getBlogsDetailSuccess(state, action: PayloadAction<IBlog>) {
            state.blog = action.payload;
            state.isLoadingGetBlog = false;
        },
        getBlogsDetailFail(state) {
            state.isLoadingGetBlog = false;
        }
    }
});

export const AppSelectors = {};

export const BlogActions = blogSlice.actions;
export const BlogReducer = blogSlice.reducer;
