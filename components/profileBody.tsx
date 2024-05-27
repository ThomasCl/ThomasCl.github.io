import React from 'react';
import {profileBodyProps} from '../types'

const ProfileBody : React.FC<profileBodyProps> = ({biography, skills}) => {
  return (
    <div className="profile-body">
      <h2>Biography:</h2>
      <p>{biography}</p>
      <h2>Skills:</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileBody;
