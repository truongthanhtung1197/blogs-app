import { all, takeEvery } from 'redux-saga/effects';
import { BlogActions } from './Blog';
import { getBlogList } from './Blog/Blog.saga';

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
    yield all([
        //DASHBOARD
        takeEvery(BlogActions.getBlogsRequest.type, getBlogList)
    ]);
}
