import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import {getMes} from 'components/utilities/Date/date'


export default function layoutViewerMenu({ menu }) {

    const data = menu.date.split('-');

    const ano = data[0]
    const mes = data[1]
    
    

    return (
        <div className="layoutViwerValue">
            <div className="layoutViwerValue_text">
                <p className="layoutViwerValue_title">
                    {menu.name}
                </p>
                <span className="layoutViwerValue_subtitle">
                    Mês: {getMes({mes})}
                </span>

                <br /> <span className="layoutViwerValue_subtitle">
                    Ano: {ano}
                </span>
            </div>
            <div className="layoutViwerValue__footer">
                <Link to={`/edit/${menu.id}`} className="layoutViwerValue_link">Editar</Link>
                <Link to={`/application/createDayMenu/${menu.id}`} className="layoutViwerValue_link">Receitas</Link>
                <Link to={`/remove/${menu.id}`} className="layoutViwerValue_link">Excluir</Link>
                <Link to={`/remove/${menu.id}`} className="layoutViwerValue_link">Publicar</Link>
            </div>
        </div>
    )
}

