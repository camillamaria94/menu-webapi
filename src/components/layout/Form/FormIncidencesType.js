import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import SelectField from 'components/utilities/input/Select/Select'
import { Formik, Field, Form } from 'formik';
import { GetMapTypeValue } from '../../../services/serviceTypeValues'




const LayoutForm = ({ id }) => {
    const [recipe, setRecipe] = useState();
    const history = useHistory();
    const valueTypeValue = GetMapTypeValue();


    const [edit, setEdit] = useState();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/incidencesType/${id}`)
                .then((response) => {
                    setRecipe(response.data)
                })
        }
    }, []);


    function onSubmit(values) {
        console.log(values)
        axios.post("http://localhost:3001/incidencesType", values)
            .then((response) => {
                history.push('/');
            })
    }
  

    function validate(values) {
        const errors = {};
        if (!values.idType) {
            errors.idType = 'É necessário selecionar o tipo de receita';
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
                    idType: 0,
                    composed: '',
                    min: 0,
                    max: 0
                }}
                render={({ values, errors }) => (
                    <Form>
                        <div className="layoutForm_group">
                            <label htmlFor="idType">Tipo de Receita</label>
                            <br />
                            <Field component={SelectField}
                                name="idType"
                                options={valueTypeValue}
                                onChange={value => setEdit(value.value)}
                            />
                            {errors.idIngredient && (<span>
                                {errors.idIngredient}
                            </span>)}
                        </div>
                        <div className="layoutForm_group">
                            <br></br>
                            <label htmlFor="composed">Receita Composta </label>
                            <div className="layoutForm_radio">
                                <Field type="radio" name="composed" value="true" id="true" /> Sim
                                <Field type="radio" name="composed" value="false" id="false" /> Não
                            </div>
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="min">Mínimo no mês</label>
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