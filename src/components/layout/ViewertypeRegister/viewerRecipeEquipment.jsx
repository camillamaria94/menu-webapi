import React, {useState, useEffect} from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function LayoutViewerRecipeEquipment({ rEquipment }) {  


    const [selected, setSelected] = useState([]);

    useEffect(() => {
        if (rEquipment) {
            axios.get(`http://localhost:3001/equipment/${rEquipment.idEquipment}`)
                .then((response) => {
                    setSelected(response.data)
                })
        }
    }, []);

    return (
        <div className="layoutViwerValue">
            <div className="layoutViwerValue_text">
                <p className="layoutViwerValue_title">
                {selected.name}
                </p>
                <span className="layoutViwerValue_subtitle">
                <br />
                Equipamento Principal: {rEquipment.primary ? "Sim" : "Não"} 
                </span>
            </div>
            <div className="layoutViwerValue__footer">
                <Link to={`/edit/${rEquipment.id}`} className="layoutViwerValue_link">Editar</Link>
                <Link to={`/remove/${rEquipment.id}`} className="layoutViwerValue_link">Excluir</Link>
            </div>
        </div>
    )

}

