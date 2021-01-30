import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import SelectField from 'components/utilities/input/Select/Select'
import { Formik, Field, Form } from 'formik';
import { GetMapIngredients } from '../../../services/serviceIngredients'




const LayoutForm = ({ id }) => {
    const [recipe, setRecipe] = useState();
    const history = useHistory();
    const valueIngredients = GetMapIngredients();


    const [edit, setEdit] = useState();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/incidences/${id}`)
                .then((response) => {
                    setRecipe(response.data)
                })
        }
    }, []);


    function onSubmit(values) {
        const method = id ? 'put' : 'post';
        const url = id ? `http://localhost:3001/incidences/${id}` : "http://localhost:3001/incidences";

        axios[method](url, values)
            .then((response) => {
                history.push('/');
            })
    }

    function validate(values) {
        const errors = {};
        if (!values.idIngredients) {
            errors.idIngredients = 'É necessário selecionar o Ingrediente';
        }
        return errors;
    }
    return (
        <div className="layoutForm">
            <h2>Adicionar Incidencias do Contrato</h2>

            <Formik
                validate={validate}
                onSubmit={onSubmit}
                validateOnMount
                initialValues={{
                    idIngredients: 0,
                    min: '',
                    max: 0
                }}
                render={({ values, errors }) => (
                    <Form>
                        <div className="layoutForm_group">
                            <label htmlFor="idIngredients">Adicionar Ingredientes</label>
                            <br />
                            <Field component={SelectField}
                                name="idIngredients"
                                options={valueIngredients}
                                onChange={value => setEdit(value.value)}
                            />
                            {errors.idIngredients && (<span>
                                {errors.idIngredients}
                            </span>)}
                        </div>
                        
                        <br />
                        <div className="layoutForm_group">
                            <label htmlFor="mainEquipment">Mínimo no mês</label>
                            <Field type="number" name="min" /> 
                        </div>
                       
                        <br />
                        <button type="submit">Salvar</button>

                    </Form>

                )} />

        </div>
    )
}
export default LayoutForm