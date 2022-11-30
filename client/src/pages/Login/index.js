
//import de componentes react-boostrap
import FormLogin from "../../components/FormLogin"

//css
import './login.css'

//react-router
import { Link } from 'react-router-dom'

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
                    <h4>Bem vindo de volta!</h4>
                    </span> {/*infoComponentLogin*/}

                    <FormLogin />

                </div> {/*comnponentLogin*/}
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