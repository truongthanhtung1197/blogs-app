import { all, takeLatest } from 'redux-saga/effects';
import { BlogActions } from './Blog';
import { getBlogById, getBlogList } from './Blog/Blog.saga';

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
    yield all([
        //BLOGS
        takeLatest(BlogActions.getBlogsRequest.type, getBlogList),
        takeLatest(BlogActions.getBlogsDetailRequest.type, getBlogById)
    ]);
}
