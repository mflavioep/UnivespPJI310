import { useState, useEffect } from "react";
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

//imports Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from "../../components/Cards";

//import de css comum a todas as páginas
import '../../App.css';

function Formulario() {

//capitação dos valores do formulário
const [values, setValues] = useState();
const [listIOT, setListIOT] = useState();

console.log(values);

const handleChangeValues = (value) => {
    setValues((prevValue) => ({
            ...prevValue,
            [value.target.id] : value.target.value
        })
    )
}

const navigate = useNavigate()

//função handle do botão enviar, usando axios como middleware para req e res.
/*const handleClickButton = () => {
    Axios.post("/pesquisa", {
        formPesquisa: values.formPesquisa
    }).then(navigate('/')) 
}*/

const handleClickButton = () => {
    Axios.post("/pesquisa", {
        formPesquisa: values.formPesquisa
    }).then((response) => {
        setListIOT(response.data);
    }) 
}
/*
useEffect(() => {
    Axios.get("/pesquisa").then((response) => {
      setListIOT(response.data);
    });
  }, []);
*/
return (
    <Container id="containerFormulario"> 
        <Form> 
            <Form.Group className="mb-3" controlId="formPesquisa">
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="Encontre os dispositivos" onChange = {handleChangeValues} /><br></br>
                        <center><Button variant="primary" type="button" onClick = {() => handleClickButton()}>Pesquisar</Button></center>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
        { typeof listIOT !== "undefined" &&  
            listIOT.map((value) => {
            return <Card key={value.id} 
            listCard={listIOT} setListCard={setListIOT}
            id={value.id}
            nome={value.nome}
            descricao={value.descricao}
            link_publicacao={value.link_publicacao}
            ></Card>; 
        })
        }
        
    </Container>
)
}

export default Formulario
