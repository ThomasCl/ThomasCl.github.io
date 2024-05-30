"use client";
import React from 'react';
import Header from '../../components/navbar'
import Head from 'next/head';
import { useState } from 'react';

const SearchBar: React.FC = () => {
  const [showThemasFilter, setShowThemasFilter] = useState(false);
  const [showSkillsFilter, setShowSkillsFilter] = useState(false);
  const [showFunctiesFilter, setShowFunctiesFilter] = useState(false);
  const [themaCheckboxes, setThemaCheckboxes] = useState({
    themaA: false,
    themaB: false,
    themaC: false,
    themaD: false,
  });

  const [skillCheckboxes, setSkillCheckboxes] = useState({
    skillA: false,
    skillB: false,
  });

  const [functieCheckboxes, setFunctieCheckboxes] = useState({
    functieA: false,
    functieB: false,
  });

  const handleThemasClick = () => {
    setShowThemasFilter(!showThemasFilter);
  };

  const handleSkillsClick = () => {
    setShowSkillsFilter(!showSkillsFilter);
  };

  const handleFunctiesClick = () => {
    setShowFunctiesFilter(!showFunctiesFilter);
  };

  const handleThemaClearAll = () => {
    setThemaCheckboxes({
      themaA: false,
      themaB: false,
      themaC: false,
      themaD: false,
    });
  };

  const handleSkillClearAll = () => {
    setSkillCheckboxes({
      skillA: false,
      skillB: false,
    });
  };

  const handleFunctieClearAll = () => {
    setFunctieCheckboxes({
      functieA: false,
      functieB: false,
    });
  };

  const handleThemaCheckboxChange = (e: { target: { id: any; checked: any; }; }) => {
    const { id, checked } = e.target;
    setThemaCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: checked,
    }));
  };

  const handleSkillCheckboxChange = (e: { target: { id: any; checked: any; }; }) => {
    const { id, checked } = e.target;
    setSkillCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: checked,
    }));
  };

  const handleFunctieCheckboxChange = (e: { target: { id: any; checked: any; }; }) => {
    const { id, checked } = e.target;
    setFunctieCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: checked,
    }));
  };
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
      <button className="button" onClick={handleThemasClick}>Thema's</button>
      <button className="button" onClick={handleSkillsClick}>Skills</button>
      <button className="button" onClick={handleFunctiesClick}>Functies</button>
    </div>
    <div className="checkbox-container">
      <input type="checkbox" id="myCheckbox"/>
      <label>
        urbanlab related
      </label>
    </div>

    {showThemasFilter && (
    <div className="themas-filter">
        <h3>Thema's</h3>
      <input
          type="text"
          className="themas-bar"
          placeholder="Optie..."
        />
      <button type="submit" className="themas-clearall" onClick={handleThemaClearAll}>Verwijder alles</button>
      <div className="themas-checkbox-group">
        <div className="themas-checkbox">
          <input type="checkbox" id="themaA" checked={themaCheckboxes.themaA} onChange={handleThemaCheckboxChange}/>
          <label>
            optie a
          </label>
        </div>
        <div className="themas-checkbox">
          <input type="checkbox" id="themaB" checked={themaCheckboxes.themaB} onChange={handleThemaCheckboxChange}/>
          <label>
            optie b
          </label>
        </div>
        <div className="themas-checkbox">
          <input type="checkbox" id="themaC" checked={themaCheckboxes.themaC} onChange={handleThemaCheckboxChange}/>
          <label>
            optie c
          </label>
        </div>
        <div className="themas-checkbox">
          <input type="checkbox" id="themaD" checked={themaCheckboxes.themaD} onChange={handleThemaCheckboxChange}/>
          <label>
            optie d
          </label>
        </div>
      </div>
    </div>
    )}

    {showSkillsFilter && (
    <div className="skills-filter">
        <h3>skills</h3>
      <input
          type="text"
          className="skills-bar"
          placeholder="Optie..."
      />
      <button type="submit" className="skills-clearall" onClick={handleSkillClearAll}>Verwijder alles</button>
      <div className="skills-checkbox-group">
        <div className="skills-checkbox">
          <input type="checkbox" id="skillA" checked={skillCheckboxes.skillA} onChange={handleSkillCheckboxChange}/>
          <label>
            optie a
          </label>
        </div>
        <div className="skills-checkbox">
          <input type="checkbox" id="skillB" checked={skillCheckboxes.skillB} onChange={handleSkillCheckboxChange}/>
          <label>
            optie b
          </label>
        </div>
      </div>
    </div>
    )}

    {showFunctiesFilter && (
    <div className="functies-filter">
      <h3>functies</h3>
      <input
          type="text"
          className="functies-bar"
          placeholder="Optie..."
        />
      <button type="submit" className="functies-clearall" onClick={handleFunctieClearAll}>Verwijder alles</button>
      <div className="functies-checkbox-group">
        <div className="functies-checkbox">
          <input type="checkbox" id="functieA" checked={functieCheckboxes.functieA} onChange={handleFunctieCheckboxChange}/>
          <label>
            optie a
          </label>
        </div>
        <div className="functies-checkbox">
          <input type="checkbox" id="functieB" checked={functieCheckboxes.functieB} onChange={handleFunctieCheckboxChange}/>
          <label>
            optie b
          </label>
        </div>
      </div>
    </div>
    )}
    
      
    </>
    );
}


export default SearchBar;
