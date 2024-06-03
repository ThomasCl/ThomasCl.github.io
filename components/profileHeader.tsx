import React from 'react';
import {profileHeaderProps} from '../types'
import Header from './navbar'

const ProfileHeader : React.FC<profileHeaderProps> = ({name, title, institution}) => {
  return (
    <>
    <Header></Header>
    <div className="profile-header">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <h3>{institution}</h3>
    </div>
    </>
  );
};

export default ProfileHeader;
