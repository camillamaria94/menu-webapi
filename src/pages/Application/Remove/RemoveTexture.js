import React from 'react'
import {deleteTexture} from '../../../services/serviceTexture'
import {useHistory, useParams} from 'react-router-dom'

export default function RemoveTexture(props) {

    const { id } = useParams();
    const history = useHistory();

    return(

        <div>
            {deleteTexture({id})}
            {history.push('/create')}
           
        </div>
    )
}

