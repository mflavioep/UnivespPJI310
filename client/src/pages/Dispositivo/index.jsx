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
const [listDisp, setListDisp] = useState();

console.log(values);

const navigate = useNavigate()

/*useEffect(() => {
    Axios.get("disp/" + values.link_id).then((response) => {
      setListDisp(response.data);
    });
  }, []);
*/

return (
    <Container id="containerFormulario"> 
        <Form> 
            <Form.Group className="mb-3" controlId="formPesquisa">
                <Row>
                    <Col>
                        {values}
                    </Col>
                </Row>
            </Form.Group>
        </Form>



    </Container>
)
}

export default Formulario
