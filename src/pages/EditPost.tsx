import React from 'react';
import {Link, useLocation} from 'react-router-dom';

function EditPost() {
  const { state } = useLocation();
  const [content, setContent] = React.useState(state.content);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(`http://localhost:7070/posts/${state.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: state.id,
        content,
      }),
    })
      .then(response => {
        if (response.ok) {
          window.location.replace(`/posts/${state.id}`);
        }
      })
      .catch(e => console.error(e));
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between bg-light py-1 px-3">
        <h2>Редактирование поста</h2>
        <Link to={`/posts/${state.id}`}>Х</Link>
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
        <button type="submit" className="btn btn-primary">Сохранить</button>
      </form>
    </>
  );
}

export default EditPost;
