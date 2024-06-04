"use client";
import React from 'react';
import Header from '../../components/navbar'
import Head from 'next/head';
import { useState, useEffect } from 'react';
import UserService from '../../services/UserService';
import { json_user } from '../../types';
import { user } from '@nextui-org/react';
import UserOverviewTable from '../../components/userOverview';
const SearchBar: React.FC = () => {
  const [showThemasFilter, setShowThemasFilter] = useState(false);
  const [showSkillsFilter, setShowSkillsFilter] = useState(false);
  const [showFunctiesFilter, setShowFunctiesFilter] = useState(false);
  
  const[nameFilter, setNameFilter] = useState("")
  const[themasFilter, setThemasFilter] = useState("")
  const[skillsFilter, setSkillsFilter] = useState("")
  const[functiesFilter, setFunctiesFilter] = useState("")
  const[relatedFilter, setrelatedFilter] = useState(false)


  const [users, setUsers] = useState<json_user[]>([])

  const [themaCheckboxes, setThemaCheckboxes] = useState({
    themaA: false,
    themaB: false,
    themaC: false,
    themaD: false,
  });

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
    setThemaCheckboxes({
      themaA: false,
      themaB: false,
      themaC: false,
      themaD: false,
    });
  };

  const handleThemaCheckboxChange = (e: { target: { id: any; checked: any; }; }) => {
    const { id, checked } = e.target;
    setThemaCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: checked,
    }));
  };

  const getAllUsers = async () => {
    setUsers(UserService.getAllUsers());
  }
  const getUser = async (name?: string,
    functies?: string, 
    themas?: string, 
    skills?: string, 
    urbanLabRelated?:boolean) =>{
      setUsers(UserService.getUsers(name,functies,themas,skills,urbanLabRelated));
    }

  useEffect(() => {
    getAllUsers()
  }, [])

  useEffect(() => {
    getUser(
      nameFilter,
      functiesFilter, 
      themasFilter, 
      skillsFilter, 
      relatedFilter)
  }, [nameFilter, functiesFilter, themasFilter, skillsFilter, relatedFilter])


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
                placeholder={nameFilter}
                onChange={(event) => setNameFilter(event.target.value)}
                />
          </div>
          <button type="submit" className="searchbar-submit">Zoek</button>
      </div>
    </div>
    <div className="checkbox-container">
      <input type="checkbox" id="myCheckbox"/>
      <label>
        Is de persoon urbanlab gerelateerd?
      </label>
    </div>
    <div className="radio-input">
      <label>
      <input type="radio" id="themas" name="value-radio" value="themas" onClick={handleThemasClick}/>
      <span>Thema's</span>
      </label>
      <label>
        <input type="radio" id="skills" name="value-radio" value="skills" onClick={handleSkillsClick}/>
      <span>Skills</span>
      </label>
      <label>
        <input type="radio" id="functies" name="value-radio" value="functies" onClick={handleFunctiesClick}/>
      <span>Functies</span>
      </label>
      <span className="selection"></span>
    </div>
    

    {showThemasFilter && (
    <div className="themas-filter">
        <h3>Thema's</h3>
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
                <input type="text" className="searchbar-input-themas" name="q" title="Search" role="combobox" placeholder="Zoek..."/>
            </div>
        </div>
      </div>
      <div className="themas-checkbox-group">
        <div className="themaA">
          <input type="checkbox" id="themaA" checked={themaCheckboxes.themaA} onChange={handleThemaCheckboxChange}/>
          <label>
            optie a
          </label>
        </div>
        <div className="themaB">
          <input type="checkbox" id="themaB" checked={themaCheckboxes.themaB} onChange={handleThemaCheckboxChange}/>
          <label>
            optie b
          </label>
        </div>
        <div className="themaC">
          <input type="checkbox" id="themaC" checked={themaCheckboxes.themaC} onChange={handleThemaCheckboxChange}/>
          <label>
            optie c
          </label>
        </div>
        <div className="themaD">
          <input type="checkbox" id="themaD" checked={themaCheckboxes.themaD} onChange={handleThemaCheckboxChange}/>
          <label>
            optie d
          </label>
        </div>
      </div>
      <button type="submit" className="themas-clearall" onClick={handleThemaClearAll}>Verwijder thema's</button>
    </div>

    )}

    {showSkillsFilter && (
    <div className="skills-filter">
        <h3>Skills</h3>
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
                    placeholder={skillsFilter}
                    onChange={(event) => setSkillsFilter(event.target.value)}
                    />
              </div>
          </div>
      </div>
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
                  placeholder={functiesFilter}
                  onChange={(event) => setFunctiesFilter(event.target.value)}
                  />
            </div>
        </div>
      </div>
    </div>
    )} 

      <UserOverviewTable users={users}/>

    </>
    );
}


export default SearchBar;
