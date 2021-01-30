import React from 'react'
import {deleteRecipe} from '../../../services/serviceRecipe'
import {useHistory, useParams} from 'react-router-dom'

export default function RemoveRecipe(props) {

    const { id } = useParams();
    const history = useHistory();

    return(

        <div>
            {deleteRecipe({id})}
            {history.push('/create')}
           
        </div>
    )
}

