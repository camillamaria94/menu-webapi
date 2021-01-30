import React, { Component, useEffect, useState } from 'react'
import './style.css';
import axios from 'axios'
import { BsFillTrashFill, BsArrowUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Datasheet from 'components/layout/Datasheet/datasheet'

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

    const id = 1
    
    return (
        <div className="layout-Card">
            <div className="layout-Card__head">

            <Link to={`/application/fichatecnica/${id}`} >Dia: {day}</Link>
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
                            <br></br>
                            <button className="layout-Card__button"> <BsFillTrashFill /> </button>
                            <button className="layout-Card__button"> <BsArrowUpRight /> </button>
                        </div>
                    )
                }

            </div>
 
        </div>
        
    )
}