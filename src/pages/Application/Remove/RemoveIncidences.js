import React from 'react'
import {deleteIncidences} from '../../../services/serviceIncidences'
import {useHistory, useParams} from 'react-router-dom'

export default function RemoveIncidences(props) {

    const { id } = useParams();
    const history = useHistory();

    return(

        <div>
            {deleteIncidences({id})}
            {history.push('/create')}
           
        </div>
    )
}

