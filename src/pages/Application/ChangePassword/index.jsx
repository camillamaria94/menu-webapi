import { useHistory, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './styles.css'
import { Formik, Form, Field } from 'formik'
import api from '../../../services/api-services'
import { login } from "../../../services/auth";


export default function ChangeLogin(props) {
    const history = useHistory();
    const { id } = useParams();

    function validateForm(values) {
        return ((values.confirmPassword) && (values.password));
    }

    const handleSubmit = values => {
        console.log(values)
        try {
            api.put(`/user/`, values)
                .then(resp => {
                    const { data } = resp
                    if (data) {
                        alert("Senha alterada com sucesso")
                        login(resp.data.token);
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
        if (!values.password) {
            errors.password = 'Senha é obrigatório';
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Confirmação da senha é obrigatório';
        }
        return errors
    }

    return (

        <div className="login">
            <h2>Alterar Senha</h2>
            <div className="form">
                <Formik
                    onSubmit={handleSubmit}
                    validate={validate}
                    initialValues={{
                        id: id,
                        password: '',
                        confirmPassword: '',
                        firstLogin: false
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

    )
};
