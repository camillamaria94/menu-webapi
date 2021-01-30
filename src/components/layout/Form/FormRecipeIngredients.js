import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import SelectField from 'components/utilities/input/Select/Select'
import { Formik, Field, Form } from 'formik';
import { GetMapIngredients } from '../../../services/serviceIngredients'


const LayoutForm = ({ id }) => {
    const [recipe, setRecipe] = useState();
    const [nameRecipe, setNameRecipe] = useState([]);
    const history = useHistory();
    const valueIngredients = GetMapIngredients();
    const [edit, setEdit] = useState();
    
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/recipe/${id}`)
                .then((response) => {
                    setNameRecipe(response.data)
                })
        }
    }, []);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/recipeIngredients/${id}`)
                .then((response) => {
                    setRecipe(response.data)
                })
        }
    }, []);


    function onSubmit(values) {
        const method = id ? 'put' : 'post';
        const url = "http://localhost:3001/recipeIngredients";
        
        axios.post(url, values)
            .then((response) => {
                history.push(`/application/addIngredients/${id}`);
            })
    }

    function validate(values) {
        const errors = {};
        if (!values.idIngredient) {
            errors.idIngredient = 'É necessário selecionar o Ingrediente';
        }
        return errors;
    }


    return (

        <div className="layoutForm">
            <h2>Adicionar Ingredientes a Receita</h2>

            <Formik
                validate={validate}
                onSubmit={onSubmit}
                validateOnMount
                initialValues={{
                    idRecipe: id,
                    idIngredient: 0,
                    primary: '',
                }}
                render={({ values, errors }) => (
                    <Form>
                        <div className="layoutForm_group">
                            <label className="layoutForm_titulo">Nome da Receita:  {nameRecipe.name}</label>
                            <label htmlFor="idIngredient">Adicionar Ingredients</label>
                            <br />
                            <Field component={SelectField}
                                name="idIngredient"
                                options={valueIngredients}
                                onChange={value => setEdit(value.value)}
                            />
                            {errors.idIngredient && (<span>
                                {errors.idIngredient}
                            </span>)}
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="primary">Ingrediente Principal?</label>
                            <div className="layoutForm_radio">
                                <Field type="radio" name="primary" value="true" id="true" /> Sim
                        <Field type="radio" name="primary" value="false" id="false" /> Não
                        </div>
                        </div>
                        <br />
                        <button type="submit">Salvar</button>
                    </Form>

                )} />

        </div>
    )
}
export default LayoutForm