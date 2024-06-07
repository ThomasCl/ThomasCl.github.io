export interface user {
    voornaam: string;
    achternaam: string;
    profiel_foto: string;
    institutie: string;
    huidige_functie: string[];
    email: string;
    phone_number: string;
    skills: string[];
    themas: string[];
    kring: string;
    urban_lab_related: boolean;
    bio: string;
    profile_page: string;
}

export interface json_user {
    voornaam: string;
    achternaam: string;
    profiel_foto: string;
    institutie: string;
    huidige_functie: string;
    email: string;
    phone_number: string;
    skills: string;
    themas: string[];
    kring: string;
    urban_lab_related: boolean;
    bio: string;
    profile_page: string;
}

export type ThemaCheckboxes = {
    [key: string]: boolean;
};
