import React from 'react';
import {profileHeaderProps} from '../types'

const ProfileHeader : React.FC<profileHeaderProps> = ({name, title, institution}) => {
  return (
    <div className="profile-header">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <h3>{institution}</h3>
    </div>
  );
};

export default ProfileHeader;
