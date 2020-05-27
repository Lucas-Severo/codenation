import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UsersList from '../../containers/UsersList/UsersList';

import { setUsers } from '../../redux/actions';

import api from '../../services/api';

const UsersRoute = () => {
  const dispatch = useDispatch();
  const  { users } = useSelector(state => state);

  useEffect(() => {
    if(users.length === 0) {
      api('/users', 'GET')
        .then(response => { 
          dispatch(setUsers(response));
        });
    }
  }, []);

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
