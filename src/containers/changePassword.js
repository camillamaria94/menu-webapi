import { useHistory, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './styles.css'
import UIContainer from 'components/UI/Conteiner/Conteiner'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'


export default function Login(props) {

    const { id } = useParams();
    const history = useHistory();




    function validateForm(values) {
        return ((values.confirmPassword) && (values.password));
    }

    const handleSubmit = values => {
        try {

            axios.put(`http://localhost:3001/user/${id}`, values)
                .then(resp => {
                    const { data } = resp
                    if (data) {
                        alert("Senha alterada com sucesso")
                        history.push("/application")
                    }
                })
        } catch (err) {
            alert('Senha e Confirmção de Senha devem ser iguais ');
            console.error(err);
        }

    }


    function validate(values) {
        const errors = {};
        if (!values.email) {
            errors.email = 'E-mail é obrigatório';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Endereço de e-mail é inválido';
        }
        if (!values.password) {
            errors.password = 'Senha é obrigatório';
        }
        return errors
    }

    return (
        <UIContainer>
            <div className="login">
                <h2>Alterar Senha</h2>
                <div className="form">
                    <Formik
                        onSubmit={handleSubmit}
                        validate={validate}
                        initialValues={{
                            name: "Camilla Maria Lopes Toto",
                            email: "camillamaria94@gmail.com",
                            password: '',
                            confirmPassword: '',
                            fistLogion: false
                        }}
                        render={({ values }) => (
                            <Form>
                                <div className="form_group">
                                    <label htmlFor="password"> Nova Senha </label>
                                    <Field name="password" type="password" className="form_input" />
                                </div>
                                <div className="form_group">
                                    <label htmlFor="confirmPassword"> Confirmação de senha </label>
                                    <Field name="confirmPassword" type="password" className="form_input" />
                                </div>
                                <button className="form-button" block size="lg" type="submit" disabled={!validateForm(values)}>Alterar Senha</button>

                            </Form>
                        )} />
                </div>
            </div>
        </UIContainer>
    )
};
