import React from 'react'
import './styles.css';
import TypeRegisterSearch from '../../../components/layout/Search/SearchTypeRecipe'
import LayoutForm from 'components/layout/Form/FormTypeRecipe'
import {useParams} from 'react-router-dom'
import UIContainer from 'components/UI/Conteiner/Conteiner'

export default function RegisterTypeRecipe(props) {

    const { id } = useParams();
    
    return(
        <UIContainer>
        <div className="register">
            
            <LayoutForm id={id ? Number.parseInt(id,10) : null}></LayoutForm>
            <div className="register-viwer">
            <TypeRegisterSearch></TypeRegisterSearch>
            </div>
      
    </div>
    </UIContainer>
    )
};
