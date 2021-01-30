import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import SelectField from 'components/utilities/input/Select/Select'
import { Formik, Field, Form } from 'formik';

const options = [
    { value: '1', label: 'Janeiro' },
    { value: '2', label: 'Fevereiro' },
    { value: '3', label: 'Março' },
    { value: '4', label: 'Abril' },
    { value: '5', label: 'Maio' },
    { value: '6', label: 'Junho' },
    { value: '7', label: 'Julho' },
    { value: '8', label: 'Agosto' },
    { value: '9', label: 'Setembro' },
    { value: '10', label: 'Outubro' },
    { value: '11', label: 'Novembro' },
    { value: '12', label: 'Dezembro' }
]

const LayoutForm = ({ id }) => {
    const [values, setValues] = useState();
    const history = useHistory();
    const [edit, setEdit] = useState();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/menu/${id}`)
                .then((response) => {
                    setValues(response.data)
                })
        }
    }, []);


    function onSubmit(values) {
        console.log(values)
        const method = id ? 'put' : 'post';
        const url = id ? `http://localhost:3001/menu/${id}` : "http://localhost:3001/menu";

        axios[method](url, values)
            .then((response) => {
                history.push('/');

            })
    }

    function validate(values) {
        const errors = {};
        if (!values.name) {
            errors.name = 'Nome é obrigatório';
        }
        return errors;
    }


    return (

        <div className="layoutForm">
            <h2>Cadastro de Cardápio Mensal</h2>
            <Formik
                validate={validate}
                onSubmit={onSubmit}
                validateOnMount
                initialValues={{
                    name: '',
                    mouth: '',
                    year: '',
                }}
                render={({ values, errors, htmlFor }) => (
                    <Form>
                        <div className="layoutForm_group">
                            <label htmlFor="name">Nome: </label>
                            <Field name="name" id="name" type="text" value={values.name} />
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="showMenu">Mês: </label>
                            <Field component={SelectField}
                                name="mouth"
                                options={options}
                                onChange={value => setEdit(value.value)}
                            />
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="showMenu">Ano: </label>
                            <Field type="year" name="year" id="year" type="number" value={values.year} />
                        </div>


                        <button type="submit" className="layoutForm_button">Salvar</button>

                    </Form>

                )} />
        </div>
    )
}
export default LayoutForm