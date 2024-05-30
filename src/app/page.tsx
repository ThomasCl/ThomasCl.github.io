"use client";
import React from 'react';
import Header from '../../components/navbar'
import Head from 'next/head';

const SearchBar: React.FC = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <>
    <div>
      <Head>
        <title>Profile Page</title>
      </Head>
      <Header></Header>
    </div>
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Zoek..."
      />
      <button type="submit" className="search-button">Zoek</button>
    </div>
    <div className="additional-buttons">
      <button className="button">Thema's</button>
      <button className="button">Skills</button>
      <button className="button">Functies</button>
    </div>
    <div className="checkbox-container">
      <input type="checkbox" id="myCheckbox"/>
      <label>
        urbanlab related
      </label>
    </div>
      
    </>
    );
}


export default SearchBar;
