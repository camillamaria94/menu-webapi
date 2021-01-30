import React, { useState, useEffect } from 'react'
import { getMenu } from '../../../services/serviceMenu';
import ViewerValue from '../ViewertypeRegister/viewerMenu'
import './styles.css'

export default function MenuSearch() {
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const params = {};
        if (search) {
            params.name_like = search;
        }
        getMenu({ params }).then((response) => {
            setSelected(response.data)
        });

    }, [search]);

    return (
        <div className="Search">
            <header className="Search-header">
                <h2>Cardápios Cadastradas</h2>
            </header>
            <input type="search"
                className="SearchInput"
                placeholder="Buscar"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            />
            {selected.map((selected) => (
                <ViewerValue menu={selected}/>
            ))
            }
        </div>
    )

}
