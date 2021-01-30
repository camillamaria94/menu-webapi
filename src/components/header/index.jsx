import React, { useEffect, useState } from 'react'
import { Container } from './styles';
import Button from "../utilities/buttonLogin/buttonLogin"
import logo from "../../images/logo-pequena.png";
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router-dom'
import { isAuthenticated, logout } from '../../services/auth'
import { GetMapMenuPublish, GetMapMenu, getMenuPublish } from 'services/serviceMenu'
import SelectField from 'components/utilities/input/Select/Select'




export default function Header(props) {
  const [edit, setEdit] = useState();

  const valueMenu = GetMapMenuPublish();
  const history = useHistory();
  const logged = isAuthenticated();



  return (
    <Container>
      <div className="header">
        <div className="image">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h2>Cardápio Digital</h2>
        <br />

        <Formik
          validateOnMount
          initialValues={{
            idMenu: 0,
          }}
          render={({ values, errors, htmlFor }) => (
            <Form>
              <div className="layoutForm_group">
                <label htmlFor="codTypeRecipe">Cardápios</label>
                <div className="layoutForm_elements">
                  <div className="layoutForm_elementsSelectMenu">
                    <Field component={SelectField}
                      name="idMenu"
                      options={valueMenu}
                      onChange={value => setEdit(value.value)}
                    />
                  </div>
                </div>
              </div>
            </Form>
          )} />

        <section className="header-button">
          <button onClick={() => {
            if (logged) {
              logout()
              history.push('/login');
            } else {
              history.push('/login');
            }
          }} > {logged ? "Sair" : "Entrar"} </button>
        </section>
      </div>
    </Container>
  );
}