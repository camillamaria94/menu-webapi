import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import SelectField from 'components/utilities/input/Select/Select'
import { Formik, Field, Form } from 'formik';
import { GetMapTypeRecipe } from '../../../services/serviceTypeRecipe'
import { GetMapRecipe } from '../../../services/serviceRecipe'
import { IoMdAddCircle } from 'react-icons/io'
import {VerifyIncidencesType, VerifyIncidencesIng} from 'components/functional/index'



function showMonth(date){
    const dateNew = new Date (date);
    console.log()
    const month = dateNew.getMonth(dateNew.setMonth) + 1
    return month

}

function showYear(date){
    const dateNew = new Date (date);
    const years = dateNew.getFullYear(dateNew.setFullYear)
    return years

}

const LayoutForm = ({ id }) => {
    const [recipe, setRecipe] = useState();
    const history = useHistory();
    const valueTypeRecipe = GetMapTypeRecipe();
    const valueRecipe = GetMapRecipe();
    const [nameMenu, setNameMenu] = useState([]);


    const [edit, setEdit] = useState();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/menu/${id}`)
                .then((response) => {
                    setNameMenu(response.data)
                })
        }
    }, []);

    const date = nameMenu.date
    const month = showMonth(date)
    const year = showYear(date)
  
    useEffect(() => {
        VerifyIncidencesIng({id,month,year})
            .then(console.log)
    },[])
    


    
    async function onSubmit(values, { resetForm }) {
        try{
        axios.post('http://localhost:3001/dayMenu', values)
            .then((response) => {
                history.push(`/application/createDayMenu/${id}`);
                alert("Receita adicionada com sucesso")
                window.location.reload();
                resetForm({})
           })
        } catch (error){
            alert("Falha ao cadastrar")
            console.error(error);

        }

    }
    function validate(values) {
        const errors = {};
        if (!values.idTypeRecipe) {
            errors.idTypeRecipe = 'É necessário selecionar um Tipo da Receita';
        }
        if (!values.idRecipe) {
            errors.idRecipe = 'É necessário selecionar uma Receita Receita';
        }
        return errors;
    }

    return (

        <div className="layoutForm">

            <h2>Adicionar dia ao Cardápio: {nameMenu.name}</h2>
            <Formik
                validate={validate}
                onSubmit={onSubmit}
                validateOnMount
                initialValues={{
                    day: 0,
                    idRecipe: 0,
                    idTypeRecipe: 0,
                    idMenu: id

                }}
                render={({ values, errors }) => (
                    <Form>

                        <div className="layoutForm_group">
                            <label htmlFor="day">Selecione o dia do mês </label>
                            <Field name="day" type="number" />
                            <br />
                            <div className="layoutForm_elements">

                                <div className="layoutForm_add">
                                    <label htmlFor="idTypeRecipe">Selecione o Tipo de Receita</label>
                                    <Field component={SelectField}
                                        name="idTypeRecipe"
                                        options={valueTypeRecipe}
                                        onChange={value => setEdit(value.value)}
                                    />
                                </div>
                                <div className="layoutForm_add">
                                    <label htmlFor="idRecipe">Selecione a Receita</label>
                                    <Field component={SelectField}
                                        name="idRecipe"
                                        options={valueRecipe}
                                        onChange={value => setEdit(value.value)}
                                    />
                                </div>
                                <button type="submit" className="layoutForm_button"> <IoMdAddCircle /></button>

                            </div>
                        </div>
                        <br />
                        <div className="layoutForm_buttons">
                        <button>Validar Cardápio </button>
                        <button>Validar Incidências de Contrato </button>
                        <button>Cadastrar Nova Receita </button>
                        <button>Adicionar em Massa </button>
                        <button>Exportar PDF </button>

                        </div>

                    </Form>

                )} />

        </div>
    )
}
export default LayoutForm