import React, { useState, useEffect } from 'react';
import postsData from '../data/posts.json';
import InstagramPost from '../Components/Post';

const Home = () => {
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
    <div>
      <div className="container mx-auto p-4 max-w-[500px]">
        {posts.map((post) => (
          <InstagramPost
            key={post.id}
            username={post.username}
            avatarUrl={post.avatarUrl}
            mediaUrl={post.mediaUrl}
            description={post.description}
            likes={post.likes}
            timeAgo={post.timeAgo}
            // mediaCount={1} // Assuming single media for simplicity
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
