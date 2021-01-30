import React, { useState, useEffect } from 'react'
import { getTypeRecipe } from '../../../services/serviceTypeRecipe';
import ViewerValue from '../ViewertypeRegister/viewerTypeRecipe'
import './styles.css'

export default function TypeRecipeSearch() {
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        
        const params = {};
        if (search) {
            params.name_like = search;
        }
        getTypeRecipe({ params }).then((response) => {
            setSelected(response.data)
        });

    }, [search]);

    return (
        <div className="typeRecipeSearch">
            <header className="typeRecipeSearch-header">
                <h2>Tipos de Receitas Cadastrados</h2>
            </header>
            <input type="search"
                className="typeRecipeSearchInput"
                placeholder="Buscar"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            />
            {selected.map((selected) => (
                <ViewerValue typeRecipe={selected}
                />
            ))
            }
        </div>
    )

}
