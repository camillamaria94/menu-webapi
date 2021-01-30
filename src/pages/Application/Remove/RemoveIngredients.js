import React from 'react'
import {deleteIngredients} from '../../../services/serviceIngredients'
import {useHistory, useParams} from 'react-router-dom'

export default function RemoveIngredients(props) {

    const { id } = useParams();
    const history = useHistory();

    return(

        <div>
            {deleteIngredients({id})}
            {history.push('/create')}
           
        </div>
    )
}

