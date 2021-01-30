import React from 'react'
import './styles.css';
import LayoutForm from 'components/layout/Form/FormDayMenu'
import Search from 'components/layout/Search/SearchDayMenu'
import {useParams} from 'react-router-dom'
import UIContainer from 'components/UI/Conteiner/Conteiner'


export default function RegisterUser(props) {

    const { id } = useParams();
   
    return(
        <UIContainer>
        <div className="register">
            
            <LayoutForm id={id ? Number.parseInt(id,10) : null}></LayoutForm>
            <div className="register-viwer"> 
     
            <Search id={id ? Number.parseInt(id,10) : null}></Search>

            </div>
           
    </div>
    </UIContainer>
    )
};
