//import CSS
import "./contato.css"

//react-router
import { Link } from "react-router-dom"

function Contato() {
    return (

        <div class="container-principal">

            <div id="banner">
                <img src="imagem/iot-banner.jpg" alt="banner-topo" />
            </div>    


            <section> 
            
                <div class="body-distributed">

                    <h1><strong>IoT DataShare</strong></h1>
                    <h2>Plataforma WEB de compartilhamento de dados de dispositivos I.O.T.</h2>
                    <h5>Alunos</h5>
                    <p> Marcos Flávio Eli Pereira, 2012284<br></br>
                        Matheus da Silva Moreira, 2007572</p>
                    <br></br>

                    <center>
                        <div className="polaroid"><br></br>
                            <a href="https://github.com/mflavioep">
                                <img className="polaroid" src="../../imagem/github_PNG19.png"></img>
                            </a>
                            <div className="polariod-container">
                                <center><br></br><p>Projeto disponível no GitHub<br></br><br></br></p></center>
                            </div>
                        </div>
                    </center><br></br>

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



export default Contato