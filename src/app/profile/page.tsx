"use client"
import React from 'react';
import {user} from '../../../types'
import Header from '../../../components/navbar'
import { useRouter } from 'next/navigation';

const Profile : React.FC<user> = () => {
  const router = useRouter();
  return (
    <>
    <Header></Header>
    <div className="profile-container">
      <div className="profile-left">
        <div className="profile-bio">
          <h2>Biografie:</h2>
          <p>bio</p>
        </div>
        <div className="profile-publications">
          <h2>publicaties:</h2>
          <ul>
            <li>publicatie1</li>
            <li>publicatie2</li>
            <li>publicatie3</li>
          </ul>
        </div>
      </div>
      <div className="profile-info">
        <h2>Bob De Bouwer</h2>
        <p>Fotoke</p>
        <p>KUL</p>
        <ul>
          <li>Dokter</li>
          <li>Dokter2</li>
        </ul>
        <p>bob@bob.be</p>
        <p>telefoon</p>
        <ul>
          <li>a</li>
          <li>b</li>
        </ul>
        <ul>
          <li>a</li>
          <li>b</li>
        </ul>
        <p>KUL</p>
        <p>urbanlab gerelateerd: ja</p>
        <p>link</p>
      </div>
    </div>


  
  
    
    </>
  );
};

export default Profile;

