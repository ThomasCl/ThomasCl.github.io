
import React from 'react';
import {user} from '../../types'
import Header from '../../components/navbar'

const Profile : React.FC<user> = ({voornaam, achternaam, profielfoto, institutie, huidige_functie, email, telefoon_nummer, skills, themas, kring, urbanlab_related, biography, profile_pagina}) => {
  return (
    <>
    <Header></Header>
    <div className="profile-body">
      <h2>Biography:</h2>
      <p>{biography}</p>
      <h2>publicaties:</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
    <div className="profile-info">
      <h2>{voornaam} {achternaam}</h2>
      <p>{profielfoto}</p>
      <p>{institutie}</p>
      <ul>
        {huidige_functie.map((functie, index) => (
          <li key={index}>{functie}</li>
        ))}
      </ul>
      <p>{email}</p>
      <p>{telefoon_nummer}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <ul>
        {themas.map((thema, index) => (
          <li key={index}>{thema}</li>
        ))}
      </ul>
      <p>{kring}</p>
      <p>{urbanlab_related}</p>
      <p>{profile_pagina}</p>
    </div>
    </>
  );
};

export default Profile;

