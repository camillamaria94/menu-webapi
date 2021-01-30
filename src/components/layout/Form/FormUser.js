import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom'


const initialValue = {
    name: '',
    email: '',
    password: '',
    telephone:''
}

const LayoutForm = ({ id }) => {
    const [values, setValues] = useState(initialValue);
    const history = useHistory();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/user/${id}`)
                .then((response) => {
                    setValues(response.data)
                })
        }
    }, []);
    function onChange(ev) {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id ? `http://localhost:3001/user/${id}` : "http://localhost:3001/user";

        axios[method](url, values)
            .then((response) => {
                history.push('/');

            })
    }
    
    return (
        <div className="layoutForm">
            <h2>Cadastro de Usuários</h2>
            <form onSubmit={onSubmit}>
                <div className="layoutForm_group">
                    <label htmlFor="name">Nome: </label>
                    <input name="name" id="name" type="text" onChange={onChange} value={values.name} />
                </div>
                <div className="layoutForm_group">
                    <label htmlFor="showMenu">E-mail: </label>
                    <input name="email" id="email" type="text" onChange={onChange} value={values.email} />
                </div>
                <div className="layoutForm_group">
                    <label htmlFor="showMenu">Senha: </label>
                    <input name="password" id="password" type="password" onChange={onChange} value={values.password} />
                </div>
                <div className="layoutForm_group">
                    <label htmlFor="showMenu">Telefone: </label>
                    <input name="telephone" id="telephone" type="text" onChange={onChange} value={values.telephone} />
                </div>
                <button type="submit">Salvar</button>

            </form>
        </div>
    )
}
export default LayoutForm