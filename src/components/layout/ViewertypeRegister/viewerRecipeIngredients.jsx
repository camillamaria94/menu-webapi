import React, {useState, useEffect} from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'



export default function LayoutViewerRecipeIngredients({ recipeIngredients }) { 
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        if (recipeIngredients) {
            axios.get(`http://localhost:3001/ingredients/${recipeIngredients.idIngredient}`)
                .then((response) => {
                    setSelected(response.data)
                })
        }
    }, []);
    


    return (
        <div className="layoutViwerValue">
            <div className="layoutViwerValue_text">
                <span className="layoutViwerValue_subtitle">
               {selected.name}
                </span>
                <span className="layoutViwerValue_subtitle">
                <br />
                Ingrediente Principal: {recipeIngredients.primary ? "Sim" : "Não"} 
                </span>
            </div>
            <div className="layoutViwerValue__footer">
                <Link to={`/edit/${recipeIngredients.id}`} className="layoutViwerValue_link">Editar</Link>
                <Link to={`/remove/${recipeIngredients.id}`} className="layoutViwerValue_link">Excluir</Link>
            </div>
        </div>
    )

}

