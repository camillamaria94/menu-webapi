import React, { useEffect, useState } from 'react'
import './style.css';
import axios from 'axios'

export default function LayoutCard({ day, menu }) {

    

    const [completeMenu, setCompleteMenu] = useState([]);

    useEffect(() => {
        const fetchRecipeData = async (idRecipe, idTypeRecipe) => {
            try {
                const recipe = await axios.get(`http://localhost:3001/recipe/${idRecipe}`);
                const type = await axios.get(`http://localhost:3001/type-recipes/${idTypeRecipe}`);

                return { recipeName: recipe.data.name, typeName: type.data.name };
            } catch (err) {
                console.error(err);
            }
        }

        const fetchMenuData = async (menu) => {
            const complete = await Promise.all(menu.map(item => {
                const {idRecipe, idTypeRecipe} = item;
                return fetchRecipeData(idRecipe, idTypeRecipe);
            }))

            setCompleteMenu(complete);
        }

        fetchMenuData(menu);
    }, []);



    return (
        <div className="layout-Card">
            <div className="layout-Card__head">
                <a href="#" className="layout-Card__date">Dia: {day}</a>
            </div>
            <div className="layout-Card__content">
                {
                    completeMenu.map((item, index) =>
                        <div className="layoutViwerValue_text" key={index}>
                            <span className="layout-Card__title">
                                <br />
                                {item.typeName}
                            </span>
                            <span className="layout-Card__text">
                                <br />
                                 {item.recipeName}
                            </span>
                        </div>
                    )
                }

            </div>
        </div>
    )
}