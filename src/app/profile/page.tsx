"use client"
import React from 'react';
import Header from '../../../components/navbar'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { json_user } from '../../../types';
import userService  from '../../../services/UserService';

type Props = {
  user: json_user;
}

const Profile : React.FC<Props> = ({user}) => {
  const router = useRouter();
  const [voornaam, setVoornaam] = useState<string>("");
  const [achternaam, setAchternaam] = useState<string>("");
  const [profiel_foto, setProfiel_foto] = useState<string>("");
  const [institutie, setInstitutie] = useState<string>("");
  const [huidige_functie, setHuidige_functie] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone_number, setPhone_number] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [themas, setThemas] = useState<string[]>([]);
  const [kring, setKring] = useState<string>("");
  const [urban_lab_related, setUrban_lab_related] = useState<boolean>(false);
  const [bio, setBio] = useState<string>("");
  const [profile_page, setProfile_page] = useState<string>("");

  useEffect(() => {
    const storedUser = sessionStorage.getItem('selectedUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const foundedUser = userService.getUserWithAllInfo(parsedUser.voornaam, parsedUser.achternaam, parsedUser.huidige_functie, parsedUser.skills, parsedUser.themas); 
      if (foundedUser) {
        setVoornaam(foundedUser.voornaam);
        setAchternaam(foundedUser.achternaam);
        setProfiel_foto(foundedUser.profiel_foto);
        setInstitutie(foundedUser.institutie);
        setHuidige_functie(foundedUser.huidige_functie);
        setEmail(foundedUser.email);
        setPhone_number(foundedUser.phone_number);
        setSkills(foundedUser.skills);
        setThemas(foundedUser.themas);
        setKring(foundedUser.kring);
        setUrban_lab_related(foundedUser.urban_lab_related)
        setBio(foundedUser.bio);
        setProfile_page(foundedUser.profile_page);
      }
    }
  }, []);
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
        <h2>{voornaam} {achternaam}</h2>
        <p>{profiel_foto ? <img src={profiel_foto} alt="Profielfoto" /> : "Geen profielfoto beschikbaar"}</p>
        <p><b>institutie:</b> {institutie ? institutie : "/"}</p>
        <p><b>skills:</b> {skills ? skills : "/"}</p>
        <p><b>urbanlab gerelateerd:</b> {urban_lab_related ? urban_lab_related : "/"}</p>
        <p><b>thema's:</b> {themas && themas.length > 0 ? themas.join(", ") : "/"}</p>
        <p><b>email:</b> {email ? email : "/"}</p>
        <p><b>telefoonnummer:</b> {phone_number ? phone_number : "/"}</p>
        <p><b>ResearchGate link:</b> {profile_page? <a href={profile_page}>ResearchGate.net</a> : "/"}</p>
      </div>
    </div>
    </>
  );
};
export default Profile;

