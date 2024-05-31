import React from 'react';
import moment from 'moment';
import { PostType } from '../types';
import 'moment/locale/ru';

function Post({ post }: { post: PostType }) {
  return (
    <div className="bg-white py-4 px-3 mb-3 shadow-sm">
      <div className="d-flex align-items-center">
        <span className="material-icons md-36 me-3">account_circle</span> John Doe
      </div>
      <div className="fs-1 py-3">{post.content}</div>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div className="d-flex align-items-center me-5">
            <span className="material-icons me-2">thumb_up</span> Нравится
          </div>
          <div className="d-flex align-items-center">
            <span className="material-icons me-2">chat_bubble_outline</span> Комментировать
          </div>
        </div>
        <div>{moment(post.created).fromNow()}</div>
      </div>
    </div>
  );
}

export default Post;
