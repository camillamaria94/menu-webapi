import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup'
import SelectField from 'components/utilities/input/Select/Select'

const valueType = [{ value: 'administrador', label: 'administrador' }, { value: 'padrão', label: 'padrão' }]

const LayoutForm = ({ id }) => {

    const [value, setValue] = useState();
    const [edit, setEdit] = useState();
    const history = useHistory();
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/user/${id}`)
                .then((response) => {
                    setValue(response.data)

                })
        }
    }, [])

    function onSubmit(values) {
        const method = id ? 'put' : 'post';
        const url = id ? `http://localhost:3001/user/${id}` : "http://localhost:3001/user";
        axios[method](url, values)
            .then((response) => {
                history.push('/');

            })
    }

    const validationSchema = yup.object().shape({
        name: yup
        .string()
        .label('name')
        .required('Nome é obrigatório'),
        email: yup
          .string()
          .label('Email')
          .email()
          .required('E-mail é obrigatório'),
        password: yup
          .string()
          .label('Password')
          .required('Senha é obrigatória')
          .min(5, 'Senha muito curta...')
          .max(10, 'A Senha deve ter no máximo 10 caracteres'),
        confirmPassword: yup
          .string()
          .required('Confirmação de Senha é obrigatório')
          .label('Confirm password')
          .test('passwords-match', 'Confirmação de Senha deve ser igual a senha', function(value) {
            return this.parent.password === value;
          })
        })




    function validate(values) {
        const errors = {};
        if (!values.name) {
            errors.name = 'Nome é obrigatório';
        }
        if (!values.email) {
            errors.email = 'E-mail é obrigatório';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Endereço de e-mail é inválido';
        }
        if (!values.password) {
            errors.password = 'Senha é obrigatória';
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Confirmação de senha é obrigatório';
        } else if(values.confirmPassword)

        return errors
    }

    return (
        <div className="layoutForm">
            <h2>Cadastro de Usuários</h2>
            <Formik
                validationSchema={validationSchema}
                validate={validate}
                onSubmit={onSubmit}
                validateOnMount
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    telephone: 0
                }}
                render={({ values, errors }) => (
                    <Form>
                        <div className="layoutForm_group">
                            <label htmlFor="name">Nome: </label>
                            <Field name="name" type="text" />

                            {errors.name && (
                                <span className="layoutForm_error1"> {errors.name}</span>
                            )}
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="email">E-mail: </label>
                            <Field name="email" type="text" />
                            {errors.email && (
                                <span className="layoutForm_error1"> {errors.email}</span>
                            )}
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="password">Senha: </label>
                            <Field name="password" type="password" />
                            {errors.password && (
                                <span className="layoutForm_error1"> {errors.password}</span>
                            )}
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="confirmPassword"> Confirme a senha: </label>
                            <Field name="confirmPassword" type="password" />
                            {errors.confirmPassword && (
                                <span className="layoutForm_error1"> {errors.confirmPassword}</span>
                            )}
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="telephone">Telefone: </label>
                            <Field name="telephone" id="telephone" type="text" />
                            <span>Telefone deve conter só números</span>
                            <br></br>
                        </div>
                        <div className="layoutForm_group">
                            <label htmlFor="showMenu">Tipo de Usuário: </label>
                            <Field name="type" component={SelectField}
                                options={valueType}
                                onChange={value => setEdit(value.value)} />
                            
                                <br/>
                        </div>
                        <button type="submit">Salvar</button>
                    </Form>
                )} />
        </div>
    )
}
export default LayoutForm