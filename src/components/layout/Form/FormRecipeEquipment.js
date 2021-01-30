import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import SelectField from 'components/utilities/input/Select/Select'
import { Formik, Field, Form } from 'formik';
import { GetMapEquipment } from '../../../services/serviceEquipment'
import { GetMapRecipe } from '../../../services/serviceRecipe'



const LayoutForm = ({ id }) => {
    const [recipe, setRecipe] = useState();
    const history = useHistory();
    const valueEquipment = GetMapEquipment();
    const valueRecipe = GetMapRecipe();
    const [nameRecipe, setNameRecipe] = useState([]);


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
            axios.get(`http://localhost:3001/recipe/${id}`)
                .then((response) => {
                    setRecipe(response.data)
                })
        }
    }, []);


    function onSubmit(values) {
        axios.post('http://localhost:3001/recipeEquipment', values)
            .then((response) => {
                history.push('/');
            })
    }

    function validate(values) {
        const errors = {};
        if (!values.idEquipment) {
            errors.idEquipment = 'É necessário selecionar o Equipamento';
        }
        return errors;
    }
    return (
        <div className="layoutForm">
            <h2>Adicionar Equipamentos a Receita</h2>

            <Formik
                validate={validate}
                onSubmit={onSubmit}
                validateOnMount
                initialValues={{
                    idRecipe: id,
                    idEquipment: 0,
                    primary: '',
                }}
                render={({ values, errors }) => (
                    <Form>
                        <div className="layoutForm_group">
                            <label className="layoutForm_titulo">Nome da Receita:  {nameRecipe.name}</label>
                            <label htmlFor="idEquipment">Adicionar Equipamentos</label>
                            <br />
                            <Field component={SelectField}
                                name="idEquipment"
                                options={valueEquipment}
                                onChange={value => setEdit(value.value)}
                            />
                            {errors.idEquipment && (<span>
                                {errors.idEquipment}
                            </span>)}
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="primary">Equipamento Principal?</label>
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