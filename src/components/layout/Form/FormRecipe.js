import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom'
import SelectField from 'components/utilities/input/Select/Select'
import { Formik, Field, Form } from 'formik';
import { GetMapTypeRecipe } from '../../../services/serviceTypeRecipe'
import { GetMapCategory } from '../../../services/serviceCategory'
import { GetMapFlavor } from '../../../services/serviceFlavor'
import { GetMapTexture } from '../../../services/serviceTexture'
import { GetMapColor } from '../../../services/serviceColor'
import { IoMdAddCircle } from 'react-icons/io'

const LayoutForm = ({ id }) => {
    const [values, setValues] = useState();

    const history = useHistory();
    const valueTypeRecipe = GetMapTypeRecipe();
    const valueCategory = GetMapCategory();
    const valueFlavor = GetMapFlavor();
    const valueTexture = GetMapTexture();
    const valueColor = GetMapColor();

    const [edit, setEdit] = useState();



    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/recipe/${id}`)
                .then((response) => {
                    setValues(response.data)
                })
        }
    }, []);

    function onSubmit(values) {

        try{
        const method = id ? 'put' : 'post';
        const url = id ? `http://localhost:3001/recipe/${id}` : "http://localhost:3001/recipe";

        axios[method](url, values)
            .then((response) => {
                history.push('/application/createRecipe');
                alert("Receita adicionada com sucesso")
                window.location.reload();

            })
        }catch(error){
            history.push('/application/createRecipe');
            alert("Falha ao cadastrar")
            console.error(error);

        } 
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
            <h2>Cadastro de Receitas</h2>
            <Formik
                validate={validate}
                onSubmit={onSubmit}
                validateOnMount
                initialValues={{
                    name: '',
                    methodPreparation: '',
                    composed: '',
                    lactose: '',
                    gluten: '',
                    codTypeRecipe: 17,
                    codCategory: 0,
                    codTexture: 0,
                    codColor: 0,
                    codFlavor: 0
                }}
                render={({ values, errors, htmlFor }) => (
                    <Form>
                        <div className="layoutForm_group">
                            <label htmlFor="name">Nome da Rececita: </label>
                            <Field name="name" type="text" />
                            {errors.name && (
                                <span className="layoutForm_error"> {errors.name}</span>
                            )}
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="methodPreparation">Modo de Preparo</label>
                            <Field type="text" name="methodPreparation" />
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="lactose">Receita Composta </label>
                            <div className="layoutForm_radio">
                                <Field type="radio" name="composed" value="true" id="true" /> Sim
                                <Field type="radio" name="composed" value="false" id="false" /> Não
                            </div>
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="lactose">Contém Lactose</label>
                            <div className="layoutForm_radio">
                                <Field type="radio" name="lactose" value="true" id="true" /> Sim
                                <Field type="radio" name="lactose" value="false" id="false" /> Não
                            </div>
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="gluten">Contém Glúten</label>
                            <div className="layoutForm_radio">
                                <Field type="radio" name="gluten" value="true" id="true" /> Sim
                        <Field type="radio" name="gluten" value="false" id="false" /> Não
                </div>
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="calories">Calorias</label>
                            <Field type="text" name="calories" />
                        </div>
                        <div className="layoutForm_group">
                            <br />
                            <label htmlFor="codTypeRecipe">Tipo de Receita</label>
                            <br />
                            <div className="layoutForm_elements">
                                <div className="layoutForm_elementsSelect">
                                    <Field component={SelectField}
                                        name="codTypeRecipe"
                                        options={valueTypeRecipe}
                                        onChange={value => setEdit(value.value)}
                                    />
                                </div>
                                <button className="layoutForm_button" type="button" target="_blank" onClick={() => history.push('/application/createTypeRecipe')}>
                                    <IoMdAddCircle /></button>
                            </div>
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="codCategory">Categoria</label>
                            <br />
                            <div className="layoutForm_elements">
                                <div className="layoutForm_elementsSelect">
                                    <Field component={SelectField}
                                        name="codCategory"
                                        options={valueCategory}
                                        onChange={value => setEdit(value.value)}
                                    />
                                </div>
                                <button className="layoutForm_button" type="button" target="_blank" onClick={() => history.push('/application/createCategory')}>
                                    <IoMdAddCircle /></button>
                            </div>
                            <br />
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="codTexture">Textura</label>
                            <br />
                            <div className="layoutForm_elements">
                                <div className="layoutForm_elementsSelect">
                                    <Field component={SelectField}
                                        name="codTexture"
                                        options={valueTexture}
                                        onChange={value => setEdit(value.value)}
                                    />
                                </div>
                                <button className="layoutForm_button" type="button" target="_blank" onClick={() => history.push('/application/createTexture')}>
                                    <IoMdAddCircle /></button>
                            </div>

                            <br />
                        </div>
                        <div className="layoutForm_group">

                            <label htmlFor="codColor">Cor</label>
                            <br />
                            <div className="layoutForm_elements">
                                <div className="layoutForm_elementsSelect">
                                    <Field component={SelectField}
                                        name="codColor"
                                        options={valueColor}
                                        onChange={value => setEdit(value.value)}
                                    />
                                </div>
                                <button className="layoutForm_button" type="button" target="_blank" onClick={() => history.push('/application/createColor')}>
                                    <IoMdAddCircle /></button>
                            </div>
                            <br />
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="codFlavor">Sabor</label>
                            <br />
                            <div className="layoutForm_elements">
                                <div className="layoutForm_elementsSelect">
                                    <Field component={SelectField}
                                        name="codFlavor"
                                        options={valueFlavor}
                                        onChange={value => setEdit(value.value)}
                                    />
                                </div>
                                <button className="layoutForm_button" type="button" target="_blank" onClick={() => history.push('/application/createFlavor')}>
                                    <IoMdAddCircle /></button>
                            </div>
                            <br />
                        </div>
                        <button type="submit">Salvar</button>

                    </Form>

                )} />
        </div>
    )
}
export default LayoutForm