import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

import api from '../../services/api';

const ProfileRoute = (props) => {
  const [name, setName] = useState('');
  const [id, setUserId] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      const { username } = props.match.params;
      api(`/users?search=${username}`)
      .then(profileData => {
        setAvatar(profileData[0].avatar);
        setEmail(profileData[0].email);
        setName(profileData[0].name);
        setUsername(profileData[0].username);
        setUserId(profileData[0].id);
      });
  }, [props.match.params]);

  useEffect(() => {
    if(id) {
      api(`/users/${id}/posts`)
      .then(posts => {
        setUserPosts(posts);
        setIsLoading(false);
      });
    }
  }, [id]);



  return (
    <div data-testid="profile-route">
      <UserProfile
        name={name}
        avatar={avatar}
        username={username}
        email={email}
      />

      {isLoading
        ? (<Loading />)
        : <UserPosts posts={userPosts} />
      }
    </div>
  );
};

export default ProfileRoute;
