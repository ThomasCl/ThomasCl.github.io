import users from './results.json'; 
import {json_user} from '../types';
import { types } from 'util';


const getAllUsers = (): json_user[] => {
    return users
}

const getUsers = (
    name?: string,
    functies?: string, 
    themas?: string, 
    skills?: string, 
    urbanLabRelated?:string): json_user[] => {
        return users.filter(user => {
            const fullName = `${user.voornaam} ${user.achternaam}`;
    
            const userFuncties = user.huidige_functie ? user.huidige_functie.split(',').map(f => f.trim()) : [];
            const userThemas = user.themas ? user.themas.split(',').map(t => t.trim()) : [];
            const userSkills = user.skills ? user.skills.split(',').map(s => s.trim()) : [];
    
            const matchesName = name ? fullName.toLocaleLowerCase().includes(name.toLocaleLowerCase()) : true;
            const matchesFunctie = functies ? functies.split(',').map(f => f.trim()).every(f => userFuncties.includes(f)) : true;
            const matchesThema = themas ? themas.split(',').map(t => t.trim()).every(t => userThemas.includes(t)) : true;
            const matchesSkills = skills ? skills.split(',').map(s => s.trim()).every(s => userSkills.includes(s)) : true;
            const matchesUrbanLabRelated = urbanLabRelated ? user.urban_lab_related === urbanLabRelated : true;
    
            return matchesName && matchesFunctie && matchesThema && matchesSkills && matchesUrbanLabRelated;
        });
}

const UserService = {
    getAllUsers,
    getUsers,
}
export default UserService