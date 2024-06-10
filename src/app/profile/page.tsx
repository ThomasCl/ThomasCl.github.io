"use client"
import React, { use } from 'react';
import Header from '../../../components/navbar'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { json_user } from '../../../types';
import userService  from '../../../services/UserService';

type Props = {
  user: json_user;
}

const Profile : React.FC<Props> = () => {
  const router = useRouter();
  const [user, setUser] = useState<json_user>()

  useEffect(() => {
    const storedUser = sessionStorage.getItem('selectedUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const foundedUser = userService.getUserWithAllInfo(parsedUser.voornaam, parsedUser.achternaam, parsedUser.huidige_functie, parsedUser.skills, parsedUser.themas); 
      if (foundedUser) {
        const newUser: json_user = {
          voornaam: foundedUser.voornaam,
          achternaam: foundedUser.achternaam,
          profiel_foto: foundedUser.profiel_foto,
          institutie: foundedUser.institutie,
          huidige_functie: foundedUser.huidige_functie,
          email: foundedUser.email,
          phone_number: foundedUser.phone_number,
          skills: foundedUser.skills,
          themas: foundedUser.themas,
          kring: foundedUser.kring,
          urban_lab_related: foundedUser.urban_lab_related,
          bio: foundedUser.bio,
          profile_page: foundedUser.profile_page,
          publicaties: foundedUser.publicaties
        };
        setUser(newUser);
      }
    }
  }, []);
  return (
    <>
    <Header></Header>
    {user != undefined && (
    <div className="profile-container">
      <div className="profile-left">
        <div className="profile-bio">
          <h2>Biografie:</h2>
          <p>{user.bio}</p>
        </div>
        <div className="profile-publications">
          <h2>publicaties:</h2>
          <ul>
          {user.publicaties && user.publicaties.map((publicatie, index) => (
            <li>
              <a href={publicatie.link}>{publicatie.title}</a>
              <p>{publicatie.description}</p>
            </li>))}
          </ul>
        </div>
      </div>
      <div className="profile-info">
        <h2>{user.voornaam} {user.achternaam}</h2>
        <p>{user.profiel_foto ? <img src={user.profiel_foto} alt="Profielfoto" /> : "Geen profielfoto beschikbaar"}</p>
        <p><b>institutie:</b> {user.institutie ? user.institutie : "/"}</p>
        <p><b>skills:</b> {user.skills ? user.skills : "/"}</p>
        <p><b>Nam deel aan UrbanLab Activiteit:</b> {user.urban_lab_related ? "Ja" : "Nee"}</p>
        <p><b>thema's:</b> {user.themas && user.themas.length > 0 ? user.themas.join(", ") : "/"}</p>
        <p><b>email:</b> {user.email ? user.email : "/"}</p>
        <p><b>telefoonnummer:</b> {user.phone_number ? user.phone_number : "/"}</p>
        <p><b>ResearchGate link:</b> {user.profile_page? <a href={user.profile_page}>Researchgate.net/profile/{user.voornaam}_{user.achternaam}</a> : "/"}</p>
      </div>
    </div>
      )}
    </>
  );
};
export default Profile;

