//import do componente Form
import Formulario from "../Pesquisa"

//react-router
import { Link } from 'react-router-dom'

//import CSS
import "./home.css"

function Main() {

    return ( 
        <div class="container-principal">

            <div id="banner">
                <img src="imagem/iot-banner.jpg" alt="banner-topo" />
            </div>             
            
            <section> 
            
                <div class="body-distributed">
                    <span className="infoComponentLogin">
                    </span> {/*infoComponentLogin*/}
                    <Formulario />
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

export default Main;