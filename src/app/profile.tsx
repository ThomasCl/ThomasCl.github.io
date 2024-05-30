
import Head from 'next/head';
import ProfileHeader from '../../components/profileHeader';
import { profileHeaderProps } from '../../types';
import ProfileBody from '../../components/profileBody';
import { profileBodyProps } from '../../types';
import React from 'react';
import Header from '../../components/navbar'

const Home: React.FC = () =>{
  const headerData: profileHeaderProps = {
    name:"Bob De Bouwer",
    title:"Doctor in the building",
    institution:"University of Lentestad"
  }
  
  const bodyData: profileBodyProps = {  
    biography: "Dr. De Bouwer is a very smart man. He has a lot of expierence in building things. He is a doctor in the building. He has a lot of knowledge about building things.",
    skills: ["Building", "Construction", "Engineering", "Doctoring", "Building things", "Construction work", "Engineering work"]
  }
  return (
    <div>
      <Head>
        <title>Profile Page</title>
      </Head>
      <Header></Header>
    </div>
  );
}
export default Home;
