import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import PostCard from './pages/PostCard';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7070/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/" index element={<Home posts={posts} />} />
        <Route path="/posts/new" element={<CreatePost />} />
        <Route path="/posts/edit/:id" element={<EditPost />} />
        <Route path="/posts/:id" element={<PostCard />} />
      </Routes>
    </div>
  );
}

export default App;
