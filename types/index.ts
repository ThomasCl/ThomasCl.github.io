export interface user {
    voornaam: string;
    achternaam: string;
    profielfoto: string;
    institutie: string;
    huidige_functie: string[];
    email: string;
    telefoon_nummer: string;
    skills: string[];
    themas: string[];
    kring: string;
    urbanlab_related: boolean;
    biography: string;
    profile_pagina: string;
}

export interface profileBodyProps{
    biography: string;
    skills: string[];
}
export interface profileHeaderProps{
    name: string;
    title: string;
    institution: string;

}