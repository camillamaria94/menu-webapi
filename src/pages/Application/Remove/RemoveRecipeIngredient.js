import React from 'react'
import {deleteRecipeIngredients} from '../../../services/serviceRecipeIngredients'
import {useHistory, useParams} from 'react-router-dom'

export default function RemoveRecipeIngredients(props) {

    const { id } = useParams();
    const history = useHistory();

    return(

        <div>
            {deleteRecipeIngredients({id})}
            {history.push('/create')}
           
        </div>
    )
}

