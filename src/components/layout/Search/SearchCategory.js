import React, { useState, useEffect } from 'react'
import { getCategory } from '../../../services/serviceCategory';
import ViewerValue from '../ViewertypeRegister/viewerCategory'
import './styles.css'

export default function CategorySearch() {
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const params = {};
        if (search) {
            params.name_like = search;
        }
        getCategory({ params }).then((response) => {
            setSelected(response.data)
        });

    }, [search]);

    return (
        <div className="Search">
            <header className="Search-header">
                <h2>Categoria Cadastradas</h2>
            </header>
            <input type="search"
                className="SearchInput"
                placeholder="Buscar"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            />
            {selected.map((selected) => (
                <ViewerValue category={selected}/>
            ))
            }
        </div>
    )

}
