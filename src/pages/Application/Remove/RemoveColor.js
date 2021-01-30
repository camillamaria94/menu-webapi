import React from 'react'
import {deleteColor} from '../../../services/serviceColor'
import {useHistory, useParams} from 'react-router-dom'

export default function RemoveColor(props) {

    const { id } = useParams();
    const history = useHistory();

    return(

        <div>
            {deleteColor({id})}
            {history.push('/create')}
           
        </div>
    )
}

