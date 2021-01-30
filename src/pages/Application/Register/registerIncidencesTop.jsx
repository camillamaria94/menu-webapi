import React from 'react'
import './styles.css';

import LayoutForm from 'components/layout/Incidences/incidences.jsx'
import {useParams} from 'react-router-dom'
import UIContainer from 'components/UI/Conteiner/Conteiner'

export default function RegisterTypeRecipe(props) {

    const { id } = useParams();
    
    return(
        <UIContainer>
        <div className="register">
            
            <LayoutForm ></LayoutForm>
           
      
    </div>
    </UIContainer>
    )
};
