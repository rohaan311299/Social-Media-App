import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import postsData from '../data/posts.json';
import InstagramPost from '../Components/Post';
import Sidebar from './sidebar';
import Recommendations from './recommendations';

const Home: NextPage = () => {
  const [posts, setPosts] = useState(postsData);

  useEffect(() => {
    const fetchPosts = async () => {
      setTimeout(() => {
        setPosts(postsData);
      }, 500);
    };

    fetchPosts();
  }, []);

  return (
    <div className='container' style={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
      padding: '20px'
    }}>
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="main-content" style={{ flex: '1' }}>
        {posts.map((post) => (
          <InstagramPost
            key={post.id}
            username={post.username}
            avatarUrl={post.avatarUrl}
            mediaUrl={post.mediaUrl}
            description={post.description}
            likes={post.likes}
            timeAgo={post.timeAgo}
          />
        ))}
        </div>
        <div className="sidebar">
            <Recommendations />
        </div>
    </div>
  );
};

export default Home;