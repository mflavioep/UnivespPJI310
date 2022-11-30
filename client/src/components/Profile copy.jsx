import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'

import Card from "./Cards";

function Profile() {

    console.log('[Client] Profile.jsp')

    const navigate = useNavigate();

    const location = useLocation();
    //util para verificar a chegada dos dados
    console.log('location', location.state.email);

    //capitação dos valores do formulário
    const [values, setState] = useState('')

    //função utilizada para enviar dados do login e receber informações do banco de dados
    useEffect(() => {
            Axios.post("/profile", {
                email: location.state.email
            }).then( 
                response => setState(response.data)
            )
        }, []);


    //função criadora do elemento html
        const Dados = () => { 
        
        const nome = values.nome;
        const email = values.email;
        //const senha = values.senha;
        
        const userInformation = [
            nome, email
        ]

        function setValues(value, i=0) {
            const createElement = React.createElement('li', {key:i}, value)
            i++
                return createElement
        };   
        return userInformation.map(setValues)        
        };

        //const para exibir nome do usuario
        const Responsavel = () => values.nome

        //func para deletar cadastro
        const DeletarCadastro =  () => {
            Axios.delete("http://localhost:3001/delete", { 
                data:{ id: values.cnpj }
            }).then(navigate("/", {})) 
        };
           

    return (

        <div className="profile">
        <span display="flex">Bem vindo,  <Responsavel/> </span> 
        <br/>
        <br/>
        <Dados/>
        <br/>
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

        

    )

}

export default Profile;
