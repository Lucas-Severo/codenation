import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

import api from '../../services/api';

const FeedRoute = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    api('stories', 'GET')
      .then(response => { 
        console.log(response);
        setStories(response)
      });
  }, []);

  return (
    <div>
      <Stories />
      <Loading />
      <Posts />
    </div>
  );
};

export default FeedRoute;
