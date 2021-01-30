import React from 'react'
import './styles.css';
import Search from '../../../components/layout/Search/SearchRecipe'
import LayoutForm from 'components/layout/Form/FormRecipe'
import {useParams} from 'react-router-dom'
import UIContainer from 'components/UI/Conteiner/Conteiner'

export default function RegisterRecipe(props) {

    const { id } = useParams();
    
    return(
        <UIContainer>
        <div className="register">
            
            <LayoutForm id={id ? Number.parseInt(id,10) : null}></LayoutForm>
            <div className="register-viwer">
            <Search></Search>
            </div>
           
    </div>
    </UIContainer>
    )
};
