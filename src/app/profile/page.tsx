"use client"
import React, { use } from 'react';
import Header from '../../../components/navbar'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { json_user } from '../../../types';
import userService  from '../../../services/UserService';



const Profile : React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<json_user>()
    const handleButtonClick = () => {
        router.push('/');
    };

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
      <button className="back-button" onClick={handleButtonClick}>
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
        <span>Ga terug</span>
      </button>
      <div className="profile-left">
        <div className="profile-bio">
          <h2>Biografie:</h2>
          <p>{user.bio}</p>
        </div>
        <div className="profile-publications">
          <h2>Publicaties:</h2>
          <ul>
          {user.publicaties && user.publicaties.map((publicatie, index) => (
            <li key={index}>
              <a href={publicatie.link}>{publicatie.title}</a>
              <p>{publicatie.description}</p>
            </li>))}
          </ul>
        </div>
      </div>
      <div className="profile-info">
        <h2>{user.voornaam} {user.achternaam}</h2>
        <p>{user.profiel_foto ? (<div style={{ position: 'relative', width: 'auto', height: '200px' }}><Image src={user.profiel_foto} alt="Profielfoto" layout="fill" objectFit="contain" /></div>) : ("Geen profielfoto beschikbaar")}
        </p>
        <p><b>organisatie:</b> {user.institutie ? user.institutie : "/"}</p>
        <p><b>specialisaties:</b> {user.skills ? user.skills : "/"}</p>
        <p><b>nam deel aan UrbanLab Activiteit:</b> {user.urban_lab_related ? "Ja" : "Nee"}</p>
        <p><b>thema's:</b> {user.themas && user.themas.length > 0 ? user.themas.join(", ") : "/"}</p>
        <p><b>email:</b> {user.email ? user.email : "/"}</p>
        <p><b>telefoonnummer:</b> {user.phone_number ? user.phone_number : "/"}</p>
        <p><b>researchGate link:</b> {user.profile_page? <a href={user.profile_page}>Researchgate.net/profile/{user.voornaam}_{user.achternaam}</a> : "/"}</p>
        <p>* Deze informatie is AI-gegenereerd op basis van publieke data. Indien u ontbrekende, achterhaalde of foute informatie wil toevoegen, mail naar <a href= "mailto: info@leuven2030urbanlab.be"> info@leuven2030urbanlab.be </a></p>
      </div>
    </div>
      )}
    </>
  );
};
export default Profile;

