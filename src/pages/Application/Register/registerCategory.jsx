import React from 'react'
import './styles.css';
import Search from '../../../components/layout/Search/SearchCategory'
import LayoutForm from 'components/layout/Form/FormCategory'
import {useParams} from 'react-router-dom'
import UIContainer from 'components/UI/Conteiner/Conteiner'


export default function RegisterCategory(props) {

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
