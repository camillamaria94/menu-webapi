import React from 'react'
import './styles.css';
import Search from '../../../components/layout/Search/SearchRecipeIngredients'
import LayoutForm from 'components/layout/Form/FormRecipeIngredients'
import { useParams } from 'react-router-dom'
import UIContainer from 'components/UI/Conteiner/Conteiner'

export default function RegisterRecipeIngredients(props) {

    const { id } = useParams();

    return (
        <UIContainer>
            <div className="register">
                <LayoutForm id={id ? Number.parseInt(id, 10) : null}></LayoutForm>
                <div className="register-viwer">
                <Search idRecipe={id ? Number.parseInt(id, 10) : null}></Search>
                </div>
            </div>
        </UIContainer>
    )
};
