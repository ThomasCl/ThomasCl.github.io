import React from 'react';
import { json_user } from '../types';
import { useRouter } from 'next/navigation';

type Props = {
    users: json_user[];
}

const UserOverviewTable: React.FC<Props> = ({ users }: Props) => {
    const router = useRouter();
    const handleUserClick = (
        user: json_user
    ) => {
        console.log(user);
        sessionStorage.setItem('selectedUser', JSON.stringify(user));
        router.push('/profile');
    };
    return (
        <>
            {users && users.map((user, index) => (
                <div key={index} className="user-window" style={{ border: '1px solid #ccc', backgroundColor: '#f9f9f9', padding: '10px', marginBottom: '10px' }}>
                    <div className="w-100 d-none d-md-block" />
                    <div className="col-6">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Naam</th>
                                    <th scope="col">Functie</th>
                                    <th scope="col">Skill</th>
                                    <th scope="col">Thema</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ borderRight: '1px solid #ccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                        <button style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handleUserClick(user)}>
                                            {user.voornaam} {user.achternaam}
                                        </button>
                                    </td>
                                    <td style={{ borderRight: '1px solid #ccc' }}>{user.huidige_functie}</td>
                                    <td style={{ borderRight: '1px solid #ccc' }}>{user.skills}</td>
                                    <td>{user.themas.map((thema, index) => (
                                        <span key={index}>{thema}{index < user.themas.length - 1 && ', '}</span>
                                    ))}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </>
    )
}

export default UserOverviewTable;
