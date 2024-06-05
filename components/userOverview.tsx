import React from 'react';
import { json_user } from '../types';

type Props = {
    users: json_user[];
}

const UserOverviewTable: React.FC<Props> = ({ users }: Props) => {
    return (
        <>
            {users && users.map((user, index) => (
                <div key={index} className="user-window" style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
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
                                    <td style={{ borderRight: '1px solid #ccc', verticalAlign: 'middle', textAlign: 'center' }}>{user.voornaam} {user.achternaam}</td>
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
