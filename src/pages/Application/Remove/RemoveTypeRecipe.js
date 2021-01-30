import React from 'react'
import {deleteTypeRecipe} from '../../../services/serviceTypeRecipe'
import {useHistory, useParams} from 'react-router-dom'

export default function RemoveTypeRecipe(props) {

    const { id } = useParams();
    const history = useHistory();

    return(

        <div>
            {deleteTypeRecipe({id})}
            {history.push('/create')}
           
        </div>
    )
}

