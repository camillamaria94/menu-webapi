import { useHistory } from "react-router-dom";
import React from 'react'
import './styles.css'
import UIContainer from 'components/UI/Conteiner/Conteiner'
import { Formik, Form, Field } from 'formik'
import { getFist } from '../../../services/serviceUser'
import api from '../../../services/api-services'
import { login } from "../../../services/auth";



export default function Login(props) {
    const history = useHistory();
    function validateForm(values) {
        return ((values.email) && (values.password));
    }
    const HandleSubmit = values => {
        const loginS = async () => {
            try {
                const username = values.email
                const isFirstLogin = await getFist({username});
                const response = await api.post('/auth', values);
                if (isFirstLogin.data.firstLogin) {
                    history.push(`/changePassword/${isFirstLogin.data.id}`)
                } else {
                    login(response.data.token);
                    history.push('/application')
                }
            } catch (err) {
                alert('E-mail ou Senha invalida');
                console.error(err);
            }
        }
        loginS();
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
                <h2>Tela de Login</h2>
                <div className="form">
                    <Formik
                        onSubmit={HandleSubmit}
                        validate={validate}
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        render={({ values, errors }) => (
                            <Form>
                                <div className="form_group">
                                    <label htmlFor="email"> E-mail </label>
                                    <Field name="email" type="text" className="form_input" />
                                    {errors.email && (
                                        <span className="layoutForm_error"> {errors.email}</span>
                                    )}

                                </div>
                                <div className="form_group">
                                    <label htmlFor="email"> Senha </label>
                                    <Field name="password" type="password" className="form_input" />

                                </div>
                                <button className="form-button" block size="lg" type="submit" disabled={!validateForm(values)}>Login</button>

                            </Form>
                        )} />
                </div>
            </div>
        </UIContainer>
    )
};
