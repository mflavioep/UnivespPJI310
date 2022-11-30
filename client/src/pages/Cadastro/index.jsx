//import do componente Form
import Formulario from "../../components/FormRegister"

//import de componentes react-boostrap
import FormLogin from "../../components/FormLogin"

//react-router
import { Link } from 'react-router-dom'

//css
import './cadastro.css'


function paginaInicial() {
    return (
              
            <div className="container-principal">

                <div id="banner">
                    <img src="imagem/iot-banner.jpg" alt="banner-topo" />
                </div>             

                <section> 
                <div class="body-distributed">

                    <div className="componentCadastro">

                        <span className="infoComponentCadastro">
                        <h3><strong>Compartilhe o seu dispositivo também!</strong></h3>
                        </span>{/*infoComponentCadastro*/}
                        <Formulario />   

                    </div>
                        

                </div>    
                </section> 

                <div>
                    <footer class="footer-distributed">                       
                        <div class="footer-left">
                            <p>IoT DataShare network &copy; 2022 </p>
                            <p>Univesp - Projeto Integrador em Computação III – Turma 003</p>
                        </div>
                    </footer>
                </div>
                
            </div>
      
    )
}

export default paginaInicial