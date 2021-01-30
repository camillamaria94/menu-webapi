import React, { useState, useEffect } from 'react'
import { getUser } from '../../../services/serviceUser';
import ViewerValue from '../ViewertypeRegister/viewerUser'
import './styles.css'

export default function UserSearch() {
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const params = {};
        if (search) {
            params.name_like = search;
        }
        getUser({ params }).then((response) => {
            setSelected(response.data)   
        });

    }, [search]);



    return (
        <div className="Search">
            <header className="Search-header">
                <h2>Usuários Cadastradas</h2>
            </header>
            <input type="search"
                className="SearchInput"
                placeholder="Buscar"
                value={search}
                onChange={(ev) => setSearch(ev.target.value.toLowerCase())}
            />
            {selected.map((selected) => (
                <ViewerValue user={selected}/>
            ))
            }
        </div>
    )

}
