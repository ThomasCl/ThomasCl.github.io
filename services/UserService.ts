import users from './results.json'; 
import {json_user} from '../types';


const getAllUsers = (): json_user[] => {
    return users
}

const getUsers = (
    name?: string,
    functies?: string, 
    themas?: string, 
    skills?: string, 
    urbanLabRelated?:boolean): json_user[] => {

    return users.filter((user) => {
        const naam = user.voornaam + " " + user.achternaam
        let passName = !name || naam.toLowerCase().includes(name.toLowerCase());
        let passFuncties = !functies || user.huidige_functie.toLowerCase().includes(functies.toLowerCase());
        let passThemas = !themas || user.themas.includes(themas);
        let passSkills = !skills || user.skills.toLowerCase().includes(skills.toLowerCase());
        let passUrbanLabRelated = urbanLabRelated === undefined || user.urban_lab_related === urbanLabRelated;

        return passName && passFuncties && passThemas && passSkills && passUrbanLabRelated;
    });
};


const UserService = {
    getAllUsers,
    getUsers,

}
export default UserService