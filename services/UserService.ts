import users from './results.json'; 
import {json_user} from '../types';


const getAllUsers = (): json_user[] => {
    return users
}

const getAllThemas = (): string[] => {
    let themas = new Set<string>();
    getAllUsers().forEach(user => {
        user.themas.forEach(thema => {
            if (thema !== "") {
                themas.add(thema);
            }
        });
    });
    return Array.from(themas);
}


const getUsers = (
    name?: string,
    functies?: string, 
    themas?: string[], 
    skills?: string, 
    urbanLabRelated?:boolean): json_user[] => {

    return users.filter((user) => {
        const naam = user.voornaam + " " + user.achternaam
        const requestedFuncties = functies ? functies.toLowerCase().split(" ") : [];
        const requestedSkills = skills ? skills.toLowerCase().split(" ") : [];

        const passName = !name || naam.toLowerCase().includes(name.toLowerCase());
        const passFuncties = !functies || requestedFuncties.every(requestedFunctie => user.huidige_functie.toLowerCase().includes(requestedFunctie));
        const passThemas = !themas || !themas.length || themas.some(thema => user.themas.includes(thema));
        const passSkills = !skills || requestedSkills.every(requestedSkill => user.skills.toLowerCase().includes(requestedSkill));
        let passUrbanLabRelated = true
        if(urbanLabRelated){passUrbanLabRelated = user.urban_lab_related === urbanLabRelated}
        else{passUrbanLabRelated = true}

        return passName && passFuncties && passThemas && passSkills && passUrbanLabRelated;
    });
};

const getUserWithAllInfo = (
    voornaam: string,
    achternaam: string,
    huidige_functie: string,
    skills: string,
    themas: string[],
): json_user => {
    const foundUser = users.find(user => 
        user.voornaam === voornaam &&
        user.achternaam === achternaam &&
        user.huidige_functie === huidige_functie &&
        user.skills === skills &&
        user.themas.every(thema => themas.includes(thema)) &&
        themas.every(thema => user.themas.includes(thema))
    );

    if (!foundUser) {
        throw new Error(`Gebruiker met voornaam ${voornaam} en achternaam ${achternaam} niet gevonden.`);
    }
    return foundUser;
};

const UserService = {
    getAllUsers,
    getUsers,
    getAllThemas,
    getUserWithAllInfo
}
export default UserService