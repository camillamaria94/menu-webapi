import React, { useState, useEffect } from 'react'
import { getEquipment } from '../../../services/serviceEquipment';
import ViewerValue from '../ViewertypeRegister/viewerEquipment'
import './styles.css'

export default function EquipmentSearch() {
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const params = {};
        if (search) {
            params.name_like = search;
        }
        getEquipment({ params }).then((response) => {
            setSelected(response.data)
        });

    }, [search]);

    return (
        <div className="Search">
            <header className="Search-header">
                <h2>Equipamentos Cadastrados</h2>
            </header>
            <input type="search"
                className="SearchInput"
                placeholder="Buscar"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            />
            {selected.map((selected) => (
                <ViewerValue equipment={selected}/>
            ))
            }
        </div>
    )

}
