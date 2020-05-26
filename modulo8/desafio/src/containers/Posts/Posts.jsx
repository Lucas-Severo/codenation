import React from 'react';

import Post from '../../components/Post';

import { useSelector } from 'react-redux';

const Posts = ({ posts }) => {
  const { users } = useSelector(state => state);

  const userInfo = id => users.find(user => id === user.id);

  return (
    <div className="container" data-testid="posts">
      <section className="feed">
        { posts.length > 0 && posts.map((post) => (
            <Post
              postInfo={post}
              userInfo={userInfo(post.userId)}
              key={post.id}
            />
          ))
        }
      </section>
    </div>
  );
};

export default Posts;
