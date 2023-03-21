import { PayloadAction } from '@reduxjs/toolkit';
import { put } from 'redux-saga/effects';
import { BlogActions } from './Blog.redux';

export function* getBlogList(action: PayloadAction<any>): any {
    try {
        // const res = yield call(BaseServiceApi.getAdminDivisions, filter);
        // if (res.ok) {

        // } else {
        yield put(BlogActions.getBlogsRequest(''));
        // }
    } catch (error: any) {
        console.log(123);
        // yield put(AreaAction.getCitiesFail());
    }
}
