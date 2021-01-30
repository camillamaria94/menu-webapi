import React from 'react'
import {deleteEquipment} from '../../../services/serviceEquipment'
import {useHistory, useParams} from 'react-router-dom'

export default function RemoveEquipment(props) {

    const { id } = useParams();
    const history = useHistory();

    return(

        <div>
            {deleteEquipment({id})}
            {history.push('/create')}
           
        </div>
    )
}

