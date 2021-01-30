import React from 'react'
import {deleteUser} from '../../../services/serviceUser'
import {useHistory, useParams} from 'react-router-dom'

export default function RemoveUser(props) {

    const { id } = useParams();
    const history = useHistory();

    return(

        <div>
            {deleteUser({id})}
            {history.push('/create')}
           
        </div>
    )
}

