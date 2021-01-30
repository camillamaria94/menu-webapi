import React, { useState, useEffect } from 'react'
import ViewerValue from '../ViewertypeRegister/viewerRecipeEquipment'
import axios from 'axios'
import './styles.css'

export default function EquipmentRecipeSearch({idRecipe}) {
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        if (idRecipe) {
            axios.get(`http://localhost:3001/recipeEquipment/recipe/${idRecipe}`)
                .then((response) => {
                    setSelected(response.data)
                })
        }
    }, []);
    console.log(selected)


    return (
        <div className="Search">
            <header className="Search-header">
                <h2>Equipamentos da Receita</h2>
            </header>
            {selected.map((selected) => (
                <ViewerValue rEquipment={selected}/>
            ))
            }
        </div>
    )

}
