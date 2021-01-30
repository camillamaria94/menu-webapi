import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const initialValue = {
    name: '',
}
const LayoutFormEquipment = ({id}) => {
    const [values,setValues] = useState(initialValue);
    const history = useHistory();

    useEffect(()=>{
        if(id){
            axios.get(`http://localhost:3001/equipment/${id}`)
            .then((response)=>{
                setValues(response.data)
            })
        }
    },[]);


    function onChange(ev){
        const {name, value} = ev.target;
       setValues({...values, [name]: value});
    }
    
    function onSubmit(ev){
        ev.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id ? `http://localhost:3001/equipment/${id}` : "http://localhost:3001/equipment";

        axios[method](url, values)
            .then((response) => {
            history.push('/');

        })
    }
    return (
        <div className="layoutForm">
            <h2>Cadastro de Equipamentos</h2>
            <form onSubmit={onSubmit}> 
                <div className="layoutForm_group">
                <label htmlFor="name">Nome: </label>
                <input name="name" id="name" type="text" onChange={onChange} value={values.name} />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    )
}
export default LayoutFormEquipment