import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Post from '../components/Post';

function PostCard() {
  const { id } = useParams();
  const [data, setData] = useState({
    post: { id: 0, content: '', created: '' }
  });

  useEffect(() => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  const handleDeleteClick = () => {
    fetch(`http://localhost:7070/posts/${id}`, {
      method: 'DELETE'
    }).then(() => {
      window.location.href = '/';
    });
  };

  return (
    <div className="bg-light py-4 px-3">
      <div className="d-flex flex-row-reverse">
        <Link to="/" className="mb-2 d-inline-block">Х</Link>
      </div>
      <Post post={data?.post} />
      <div className="d-flex flex-row-reverse">
        <button className="btn btn-danger btn-sm" onClick={handleDeleteClick}>
          Удалить
        </button>
        <Link className="btn btn-primary btn-sm me-2" to={`/posts/edit/${id}`} state={data?.post}>
          Изменить
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
