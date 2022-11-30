import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";

import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

//import de css comum a todas as páginas
import '../App.css';

function App() {
  
  const navigate = useNavigate()

  const handleLogin = (values) => {
    Axios.post("/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      if (response.data.isAuthenticated === true) {
        alert(response.data.msg)

        // Transmitir id para renderizar registros aqui!! :) 
        navigate('/profile',{state:{email:values.email}}) 
      }
      else {alert(response.data.msg)}
      
    });
  };


  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(4, "A senha deve ter pelo menos 4 caracteres")
      .required("A senha é obrigatória"),
  });


  
  return (
  <Container id="containerFormulario"> 

      <Formik
        initialValues={{}}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}
      >
        <Form>
          <div className="login-form-group">
            <Field name="email" className="mb-3" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          
          {/*Outro campo*/}
          
          <div className="form-group">
            <Field name="password" className="mb-3" placeholder="Senha" type="password"/>
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Login
          </button>
        </Form>
      </Formik>

  </Container>
  )
}

export default App;
