import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function CreatePost() {
  const [content, setContent] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch('http://localhost:7070/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: crypto.randomUUID(),
        content,
        created: new Date().toISOString(),
      }),
    })
      .then(response => {
        if (response.ok) {
          window.location.replace('/');
        }
      })
      .catch(e => console.error(e));
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between bg-light py-1 px-3">
        <h2>Новый пост</h2>
        <Link to="/">Х</Link>
      </div>
      <form className="bg-light py-4 px-3" onSubmit={handleSubmit}>
        <div className="mb-3">
        <textarea
          className="form-control"
          id="content"
          name="content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
          <label htmlFor="content" className="form-label"></label>
        </div>
        <button type="submit" className="btn btn-primary">Опубликовать</button>
      </form>
    </>

  );
}

export default CreatePost;
