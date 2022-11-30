import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Axios from 'axios'

import Card from "./Cards";

function Profile() {

    //capitação dos valores do formulário
    const [values, setValues] = useState();
    const [listIOT, setListIOT] = useState();

    console.log('[Client] Profile.jsp')

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
                ...prevValue,
                [value.target.id] : value.target.value
            })
        )
    }

    const navigate = useNavigate();
    const location = useLocation();

    //util para verificar a chegada dos dados
    console.log('location', location.state.email);

    //função utilizada para enviar dados do login e receber informações do banco de dados
    useEffect(() => {
            Axios.post("/profile", {
                email: location.state.email
            }).then((response) => { 
                setListIOT(response.data)
    })
        }, []);



        //const para exibir nome do usuario
        //const Responsavel = () => values.nome

        //func para deletar cadastro
        const DeletarCadastro =  () => {
            Axios.delete("http://localhost:3001/delete", { 
                data:{ id: values.cnpj }
            }).then(navigate("/", {})) 
        };
           

    return (
        <Container id="containerFormulario"> 
        <div className="profile">
        <span display="flex">Listagem dos dispositivos próprio ou seguidos </span> 
        <br/>
        <hr></hr>
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
        <hr></hr>
        <div>
            
        <small>Gostaria de cancelar seu cadastro? Utilize o botão abaixo.
        <br/>
        Seus dados serão deletados, caso decida voltar terá que se cadastrar
        novamente!</small>
        </div><br /> 
        <button onClick={() => DeletarCadastro()} className="botaoProfile">Remover cadastro</button><br /><br />
        </div>

        </Container>

    )

}

export default Profile;
