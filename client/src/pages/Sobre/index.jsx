//import CSS
import "./sobre.css"

//react-router
import { Link } from "react-router-dom"

function Sobre() {
    return (

        <div class="container-principal">

            <div id="banner">
                <img src="imagem/iot-banner.jpg" alt="banner-topo" />
            </div>  
            <section>
                <br></br>
               <center><h1>Somos uma rede social de dispositivos IoT</h1></center>
                <div className="body-distributed">
                    <div className="body-text">
                        <p>O compartilhamento de dados pela internet permite que muitos problemas sejam 
                        identificados e resolvidos, a cada dia novos dispositivos são criados ou adaptados para se 
                        integrarem com a internet contribuindo ainda mais com a geração de dados, inclusive podem 
                        ser dispositivos de uso comum de nosso dia-a-dia reforçando o conceito de Internet das Coisas 
                        (I.O.T.) que é nome dado, de âmbito geral, à capacidade de um objeto, mesmo simples de se 
                        integrar à internet.</p><p> 
                        Diante do grande volume de dados gerados a ciência de dados vem com o propósito de 
                        extrair o máximo de informações relevantes desta massa. Disponibilizar o acesso à um dado 
                        gerado por um dispositivo I.O.T. de forma pública envolve o problema de segurança da 
                        informação, hoje, muitos destes dispositivos não são capazes de fornecer uma infraestrutura 
                        segura de acesso, esse fato ocorre porque muitos dispositivos possuem hardwares limitados, ou 
                        de função específica, em relação à um computador pessoal. Por este motivo os dispositivos 
                        I.O.T. se tornam alvos de ataques cibernéticos por pessoas mal intencionadas.</p>
                        <p>A proposta é fornecer um ponto de centralização, similar à uma rede social, onde os 
                        personagens principais são os dispositivos I.O.T., permitindo que o proprietário de cada 
                        dispositivo disponibilize o dado gerado de forma segura para a comunidade interessada ou
                        apenas para usuários específicos.</p>
                        <br></br>
                        <a href="https://pt.wikipedia.org/wiki/Internet_das_coisas">Saiba mais sobre o que é IoT.</a>
                        <br></br><br></br><hr></hr><br></br>
                    </div>
                    <center>
                    <div className="polaroid">
                        <a href="https://univesp.br">
                            <img className="polaroid" src="../../imagem/Univesp-logo.png"></img>
                        </a>
                        <div className="polariod-container">
                            <center><p>Projeto integrador Univesp (PJI310) 2022<br></br><br></br>Conheça a Univesp!<br></br><br></br></p></center>
                        </div>
                    </div></center>
                    <br></br><br></br>
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

export default Sobre