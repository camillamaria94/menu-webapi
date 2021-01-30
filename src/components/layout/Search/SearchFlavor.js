import React, { useState, useEffect } from 'react'
import { getFlavor } from '../../../services/serviceFlavor';
import ViewerValue from '../ViewertypeRegister/viewerFlavor'
import './styles.css'

export default function ColorSearch() {
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const params = {};
        if (search) {
            params.name_like = search;
        }
        getFlavor({ params }).then((response) => {
            setSelected(response.data)
        });

    }, [search]);

    return (
        <div className="Search">
            <header className="Search-header">
                <h2>Cores Cadastradas</h2>
            </header>
            <input type="search"
                className="SearchInput"
                placeholder="Buscar"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            />
            {selected.map((selected) => (
                <ViewerValue flavor={selected}/>
            ))
            }
        </div>
    )

}
