import React from 'react';

import { Link } from 'react-router-dom';

const User = ({ infoUser })  => {
  const {avatar, name, username, } = infoUser;

  return (
    <article className="post">
      <header className="post__header" data-testid="user">
      </header>
    </article>
  )
};

export default User;
