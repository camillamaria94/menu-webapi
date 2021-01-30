import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { GetMapTypeValue } from '../../../services/serviceTypeValues'
import { Formik, Field, Form } from 'formik';
import SelectField from 'components/utilities/input/Select/Select'

const initialValue = {
    name: '',
    showMenu: '',
}

const LayoutForm = ({ id }) => {
    const [values, setValues] = useState(initialValue);
    const history = useHistory();
    const [edit, setEdit] = useState();

    const valueTypeValue = GetMapTypeValue();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/type-recipes/${id}`)
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
        const url = id ? `http://localhost:3001/type-recipes/${id}` : "http://localhost:3001/type-recipes";

        axios[method](url, values)
            .then((response) => {
                history.push('/application/createRecipe');

            })
    }


    function onSubmit(values) {
        const method = id ? 'put' : 'post';
        const url = id ? `http://localhost:3001/type-recipes/${id}` : "http://localhost:3001/type-recipes";

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
        <Formik
            validate={validate}
            onSubmit={onSubmit}
            validateOnMount
            initialValues={{
                name: '',
                idTypeValue: 0
            }}
            render={({ values, errors, htmlFor }) => (
                <Form>
                    <div className="layoutForm">
                        <h2>Cadastro de Tipo de Receitas</h2>
                        <div className="layoutForm_group">
                            <label htmlFor="name">Nome: </label>
                            <Field name="name" id="name" type="text" onChange={onChange} value={values.name} />
                        </div>
                        <br></br>
                        <div className="layoutForm_elementsSelect">
                            <Field component={SelectField}
                                name="idTypeValue"
                                options={valueTypeValue}
                                onChange={value => setEdit(value.value)}
                            />
                        </div>
                        <br></br>
                        <button type="submit">Salvar</button>

                    </div>

                </Form>

            )} />



    )
}
export default LayoutForm