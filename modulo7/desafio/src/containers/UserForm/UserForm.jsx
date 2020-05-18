import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  return (
    <div className="user-form" data-testid="user-form">
      <SuccessMessage/>
    </div>
  );
};

export default UserForm;
