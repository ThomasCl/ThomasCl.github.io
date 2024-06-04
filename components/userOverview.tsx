import React from 'react'
import{ json_user } from '../types'

type Props = {
    users: json_user[];
}

const UserOverviewTable: React.FC<Props> = ({users}: Props) =>{
    return (
        <>
            <div className="w-100 d-none d-md-block" />
            <div className="col-6">
                {users && (
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
                        {users &&
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.voornaam} {user.achternaam}</td>
                                <td>{user.huidige_functie}</td>
                                <td>{user.skills}</td>
                                <td>{user.themas.map(thema => thema).join(", ")}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}
export default UserOverviewTable