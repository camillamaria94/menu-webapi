import React from 'react'
import {deleteCategory} from '../../../services/serviceCategory'
import {useHistory, useParams} from 'react-router-dom'

export default function RemoveCategory(props) {

    const { id } = useParams();
    const history = useHistory();

    return(

        <div>
            {deleteCategory({id})}
            {history.push('/create')}
           
        </div>
    )
}

