import React from 'react'
import {deleteMenu} from '../../../services/serviceMenu'
import {useHistory, useParams} from 'react-router-dom'

export default function RemoveMenu(props) {

    const { id } = useParams();
    const history = useHistory();

    return(

        <div>
            {deleteMenu({id})}
            {history.push('/create')}
           
        </div>
    )
}

