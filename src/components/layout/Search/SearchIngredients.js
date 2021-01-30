import React, { useState, useEffect } from 'react'
import { getIngredients } from '../../../services/serviceIngredients';
import ViewerValue from '../ViewertypeRegister/viewerIngredients'
import './styles.css'

export default function IngredientsSearch() {
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const params = {};
        if (search) {
            params.name_like = search;
        }
        getIngredients({ params }).then((response) => {
            setSelected(response.data)
        });

    }, [search]);

    return (
        <div className="Search">
            <header className="Search-header">
                <h2>Ingredientes Cadastradas</h2>
            </header>
            <input type="search"
                className="SearchInput"
                placeholder="Buscar"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            />
            {selected.map((selected) => (
                <ViewerValue ingredients={selected}/>
            ))
            }
        </div>
    )

}
