import React, {useState, useEffect} from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'



export default function LayoutViewerDayRecipe({ dayMenu }) { 
    const [selected, setSelected] = useState([]);

    const groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});

    const groupByBrand = groupBy('day');
    console.log(JSON.stringify(groupByBrand(dayMenu)))
      
    return (
        <div className="layoutViwerValue">
            <h1>ok</h1>
        </div>
    )

}

