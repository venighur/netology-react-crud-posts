import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../components/Post';
import { PostType } from '../types';


function Home({ posts }: {posts: PostType[]}) {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid d-flex flex-row-reverse">
          <Link className="btn btn-primary btn-sm" to="/posts/new">Создать пост</Link>
        </div>
      </nav>
      <div className="bg-light mt-4 py-4 px-3">
        {posts.length === 0 ? (
          <div>Нет записей</div>
        ) : (
          posts.map(post => (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <Post post={post} />
            </Link>
          ))
        )}
      </div>
    </>
  );
}

export default Home;
