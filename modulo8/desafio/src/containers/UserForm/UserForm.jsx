import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  return (
    <React.Fragment>
      <div className="container" data-testid="user-form">
        <SuccessMessage />
      </div>
    </React.Fragment>
  );
};

export default UserForm;
