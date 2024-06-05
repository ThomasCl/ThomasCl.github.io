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

        let passName = !name || naam.toLowerCase().includes(name.toLowerCase());
        let passFuncties = !functies || user.huidige_functie.toLowerCase().includes(functies.toLowerCase());
        let passThemas = !themas || !themas.length || themas.some(thema => user.themas.includes(thema));
        let passSkills = !skills || user.skills.toLowerCase().includes(skills.toLowerCase());
        let passUrbanLabRelated = true
        if(urbanLabRelated){passUrbanLabRelated = user.urban_lab_related === urbanLabRelated}
        else{passUrbanLabRelated = true}
        // let passUrbanLabRelated = urbanLabRelated === undefined || user.urban_lab_related === urbanLabRelated;
        
        console.log(`User: ${naam}`);
        console.log(`- passThemas: ${passThemas} (User themas: ${user.themas}, Filter themas: ${themas})`);
        console.log(`- passUrbanLabRelated: ${passUrbanLabRelated}`);

        return passName && passFuncties && passThemas && passSkills && passUrbanLabRelated;
    });
};


const UserService = {
    getAllUsers,
    getUsers,
    getAllThemas,
}
export default UserService