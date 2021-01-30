import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function layoutViewerEquipment({ equipment }) {  

    return (
        <div className="layoutViwerValue">
            <div className="layoutViwerValue_text">
                <p className="layoutViwerValue_title">
                    {equipment.name}
                </p>
            </div>
            <div className="layoutViwerValue__footer">
                <Link to={`/edit/${equipment.id}`} className="layoutViwerValue_link">Editar</Link>
                <Link to={`/remove/${equipment.id}`} className="layoutViwerValue_link">Excluir</Link>
            </div>
        </div>
    )

}

