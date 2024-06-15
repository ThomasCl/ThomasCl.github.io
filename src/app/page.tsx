"use client";
import React from 'react';
import Header from '../../components/navbar'
import Head from 'next/head';
import { useState, useEffect } from 'react';
import UserService from '../../services/UserService';
import { json_user, ThemaCheckboxes } from '../../types';
import { user } from '@nextui-org/react';
import UserOverviewTable from '../../components/userOverview';

const SearchBar: React.FC = () => {

  const [showThemasFilter, setShowThemasFilter] = useState(false);
  const [showSkillsFilter, setShowSkillsFilter] = useState(false);
  const [showFunctiesFilter, setShowFunctiesFilter] = useState(false);
  
  const[nameFilter, setNameFilter] = useState("")
  const[skillsFilter, setSkillsFilter] = useState("")
  const[functiesFilter, setFunctiesFilter] = useState("")
  const[relatedFilter, setrelatedFilter] = useState(false)
  
  const [users, setUsers] = useState<json_user[]>([])
  const[themas, setThemas] = useState<string[]>([])
  const [themaCheckboxes, setThemaCheckboxes] = useState<ThemaCheckboxes>({})

  const handleThemasClick = () => {
    setShowThemasFilter(true);
    setShowSkillsFilter(false);
    setShowFunctiesFilter(false);
  };

  const handleSkillsClick = () => {
    setShowSkillsFilter(true);
    setShowThemasFilter(false);
    setShowFunctiesFilter(false);
  };

  const handleFunctiesClick = () => {
    setShowFunctiesFilter(true);
    setShowThemasFilter(false);
    setShowSkillsFilter(false);
  };

  const handleThemaClearAll = () => {
    const clearedCheckboxes: ThemaCheckboxes = {};
    themas.forEach(thema => {
      clearedCheckboxes[thema] = false;
    });
    setThemaCheckboxes(clearedCheckboxes);
  };

  const handleSkillsClearAll = () => {
    setSkillsFilter("");
  };
  const handleFunctiesClearAll = () => {
    setFunctiesFilter("");
  };

  const handleThemaCheckboxChange = (e: { target: { id: string; checked: boolean; }; }) => {
    const { id, checked } = e.target;
    setThemaCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: checked,
    }));
  };

  const handleUrbanCheckboxChange = () => {
    if(relatedFilter){setrelatedFilter(false)}
    else{setrelatedFilter(true)}
  }

  const getAllUsers = async () => {
    setUsers(UserService.getAllUsers());
  }
  const getUser = async (name?: string,
    functies?: string, 
    themas?: string[], 
    skills?: string, 
    urbanLabRelated?:boolean) =>{
      setUsers(UserService.getUsers(name,functies,themas,skills,urbanLabRelated));
    }

  useEffect(() => {
    getAllUsers();
    // setShowThemasFilter(true);  
    // const button = document.getElementById('themas');
    // if (button) {
    //   button.click();
    // }

    const fetchedThemas = UserService.getAllThemas();
    setThemas(fetchedThemas);

    const initialCheckboxes: ThemaCheckboxes = {};
    fetchedThemas.forEach(thema => {
      initialCheckboxes[thema] = false;
    });
    setThemaCheckboxes(initialCheckboxes);
  }, []);

  useEffect(() => {
    let themasFilter:string[] = []
    themas.forEach(thema => {
      if(themaCheckboxes[thema]){themasFilter.push(thema);}});
    
    getUser(
      nameFilter,
      functiesFilter, 
      themasFilter, 
      skillsFilter, 
      relatedFilter)
  }, [nameFilter, functiesFilter, themaCheckboxes, skillsFilter, relatedFilter])


  return (
    <>
    <div>
      <Head>
        <title>Profile Page</title>
      </Head>
      <Header></Header>
    </div>
    <div className="searchbar">
      <div className="searchbar-wrapper">
          <div className="searchbar-left">
              <div className="search-icon-wrapper">
                  <span className="search-icon searchbar-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                          </path>
                      </svg>
                  </span>
              </div>
          </div>

          <div className="searchbar-center">
              <div className="searchbar-input-spacer"></div>
              <input 
                type="text" 
                className="searchbar-input" 
                name="q" 
                title="Search" 
                role="combobox" 
                placeholder= "Zoek op naam..."
                value={nameFilter}  
                onChange={(event) => setNameFilter(event.target.value)}
                />
          </div>
      </div>
    </div>
    <div className="checkbox-container">
      <input 
        type="checkbox" 
        id="myCheckbox"
        checked={relatedFilter}
        onChange={handleUrbanCheckboxChange}
        />
      <label>
        Heeft de persoon al deelgenomen aan een UrbanLab activiteit?
      </label>
    </div>
    
    <div className="radio-input">
      <label>
      <input type="radio" id="themas" name="value-radio" value="themas" onClick={handleThemasClick} />
      <span>Thema's</span>
      </label>
      <label>
        <input type="radio" id="skills" name="value-radio" value="specialisatie" onClick={handleSkillsClick}/>
      <span>Specialisaties</span>
      </label>
      <label>
        <input type="radio" id="functies" name="value-radio" value="functies" onClick={handleFunctiesClick}/>
      <span>Functies</span>
      </label>
      <span className="selection"></span>
    </div>
    

  {showThemasFilter && (
  <div className="themas-filter" style={{ width: "80vw" }}>
    <h3>Thema's</h3>
    <div className="themas-checkbox-group">
      {themas.map((thema, index) => (
        <div
          key={index}
          className={`${thema} rounded thema-box`}
          style={{ border: `1px solid black`, background: `${themaCheckboxes[thema] ? "teal" : "white"}` }}
          onClick={() => handleThemaCheckboxChange({ target: { id: thema, checked: !themaCheckboxes[thema] } })}
        >
          {thema}
        </div>
      ))}
      <div className="spacer"></div>
      <hr className="divider" />
      <button type="submit" className="themas-clearall" onClick={handleThemaClearAll}>Verwijder thema's</button>
    </div>
  </div>
)}






    {showSkillsFilter && (
    <div className="skills-filter">
        <h3>Specialisaties</h3>
        <div className="searchbar">
          <div className="searchbar-wrapper">
              <div className="searchbar-left">
                  <div className="search-icon-wrapper">
                      <span className="search-icon searchbar-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                              </path>
                          </svg>
                      </span>
                  </div>
              </div>

              <div className="searchbar-center">
                <div className="searchbar-input-spacer"></div>
                <input 
                  type="text" 
                  className="searchbar-input-skills" 
                  name="q" 
                  title="Search" 
                  role="combobox" 
                  placeholder= "Zoek..."
                  value={skillsFilter}
                  onChange={(event) => setSkillsFilter(event.target.value)}
                  />
              </div>
          </div>
      </div>
      <button type="submit" className="skills-clearall" onClick={handleSkillsClearAll}>Verwijder Specialisaties</button>
    </div>
    )}

    {showFunctiesFilter && (
    <div className="functies-filter">
      <h3>Functies</h3>
        <div className="searchbar">
        <div className="searchbar-wrapper">
            <div className="searchbar-left">
                <div className="search-icon-wrapper">
                    <span className="search-icon searchbar-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                            </path>
                        </svg>
                    </span>
                </div>
            </div>

            <div className="searchbar-center">
                <div className="searchbar-input-spacer"></div>
                <input 
                  type="text" 
                  className="searchbar-input-functies" 
                  name="q" 
                  title="Search" 
                  role="combobox" 
                  placeholder= "Zoek..."
                  value={functiesFilter}
                  onChange={(event) => setFunctiesFilter(event.target.value)}
                  />
            </div>
        </div>
      </div>      
      <button type="submit" className="functies-clearall" onClick={handleFunctiesClearAll}>Verwijder functies</button>
    </div>
    )} 

      <UserOverviewTable users={users}/>

    </>
    );
}


export default SearchBar;
