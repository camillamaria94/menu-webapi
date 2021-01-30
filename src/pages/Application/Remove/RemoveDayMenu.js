import React from 'react'
import {deleteDayMenu} from '../../../services/serviceDayMenu'
import {useHistory, useParams} from 'react-router-dom'

export default function RemoveDayMenu(props) {

    const { id } = useParams();
    const history = useHistory();

    return(

        <div>
            {deleteDayMenu({id})}
            {history.push('/create')}
           
        </div>
    )
}

