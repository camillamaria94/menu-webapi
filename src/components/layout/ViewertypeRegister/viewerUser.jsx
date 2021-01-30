import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'



export default function layoutViewerUser({ user }) {  
    return (
        <div className="layoutViwerValue">
            <div className="layoutViwerValue_text">
                <p className="layoutViwerValue_title">
                    {user.name}
                </p>
                <span className="layoutViwerValue_subtitle">
               {user.email}
                </span>
                <span className="layoutViwerValue_subtitle">
                <br /> {user.telephone}
                </span>
            </div>
            <div className="layoutViwerValue__footer">
                <Link to={`/editUser/${user.id}`} className="layoutViwerValue_link">Editar</Link>
                <Link to={`/removeUser/${user.id}`} className="layoutViwerValue_link">Excluir</Link>
            </div>
        </div>
    )

}

