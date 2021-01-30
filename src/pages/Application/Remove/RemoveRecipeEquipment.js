import React from 'react'
import {deleteRecipeEquipment} from '../../../services/serviceRecipeEquipment'
import {useHistory, useParams} from 'react-router-dom'

export default function RemoveRecipeEquipment(props) {

    const { id } = useParams();
    const history = useHistory();

    return(

        <div>
            {deleteRecipeEquipment({id})}
            {history.push('/create')}
           
        </div>
    )
}

