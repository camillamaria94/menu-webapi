import React, { useState, useEffect } from 'react'
import { getDayMenu, getDayMenuID } from '../../../services/serviceDayMenu';
import Card from '../Cards/cardsPublish'
import './styles.css'


export default function UserSearch({ id }) {
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState('');
 


    useEffect(() => { 
        const idMenu = id;
        console.log("search", idMenu)
        getDayMenuID({ idMenu }).then((response) => {
            setSelected(response)
        });

    }, [search]);


    var groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, []);
    };
    const values = groupBy(selected, 'day')


    return (
        <div className="Search">

            {values.map((values, index) =>
                <Card day={index} menu={values} />
            )}
        </div>

    )

}
