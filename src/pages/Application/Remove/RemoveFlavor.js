import React from 'react'
import {deleteFlavor} from '../../../services/serviceFlavor'
import {useHistory, useParams} from 'react-router-dom'

export default function RemoveFlavor(props) {

    const { id } = useParams();
    const history = useHistory();

    return(

        <div>
            {deleteFlavor({id})}
            {history.push('/create')}
           
        </div>
    )
}

