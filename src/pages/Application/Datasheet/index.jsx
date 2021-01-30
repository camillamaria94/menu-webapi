import React from 'react'
import UIContainer from 'components/UI/Conteiner/Conteiner'
import FichaTecnica from 'components/layout/Datasheet/datasheet'
import {useParams} from 'react-router-dom'


export default function Datasheet(props) {
    const { id } = useParams();
    return(
        <UIContainer>
        <div>
            <h1> Ficha Técnica {id} </h1>
        <FichaTecnica id = {id}></FichaTecnica>
        </div>
        </UIContainer>
    )

}