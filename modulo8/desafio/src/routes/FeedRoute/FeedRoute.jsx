import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import store from '../../redux/store';

import './FeedRoute.scss';

import { setUsers, setStories, setPosts, setUsersFetched } from '../../redux/actions';
import api from '../../services/api';

const FeedRoute = () => {
  const dispatch = useDispatch();
  const { users, stories, posts, usersFetched } = useSelector(state => state);

  useEffect(() => {
    dispatch(setUsersFetched(0));
    api('/users', 'GET')
      .then(response => { dispatch(setUsers(response)) });
  }, [dispatch]);

  useEffect(() => {
    api('/stories', 'GET')
      .then(response => { dispatch(setStories(response))})
  }, [users, dispatch]);

  useEffect(() => {
    if (usersFetched === users.length) {
      return;
    }

    api(`/users/${users[usersFetched].id}/posts`)
      .then(response => { 
        dispatch(setPosts([...posts, ...response]))
        dispatch(setUsersFetched(usersFetched + 1));
      })
  }, [users, usersFetched]);

  return (
    <Provider store={store}>
    <div data-testid="feed-route">
      {(users.length > 0 && stories.length > 0) && (
        <Stories
          stories={stories}
        />
      )}

      {users.length !== usersFetched
        ? (<Loading />)
        : (
          <Posts
            posts={posts}
          />)
      }
    </div>
    </Provider>
  );
};

export default FeedRoute;
