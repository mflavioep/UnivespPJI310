/********************************************************************************************************
* UNIVESP - PJI310
* Micro serviço para aquisição de dados e conexão
* com o banco de dados
* PATH:       /
* ARQUIVO:    index.js
* MODIFICADO: 28/11/2022 
********************************************************************************************************/

// Declaração de bibliotecas e constantes
const { response } = require("express");
const md5 = require("md5");
const path = require("path");
const app = require('express')();
const bodyParser = require('body-parser');
// Ler application/json
app.use(bodyParser.json());
// Ler application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Biblioteca do Postgres
const { Pool } = require('pg');

// Variáveis de ambiente para o modo desenvolvedor
// Uso da biblioteca dotenv que configura as variáveis de ambiente de acordo com  arquivo .env
// Quando o programa é executado no modo "production" faz uso das próprias variáveis de ambiente.
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
console.log("Servidor modo =>", process.env.NODE_ENV);

// Abertura do pool de conexões PostgreSQL com o servidor para uso
var pool;
if (process.env.NODE_ENV === 'production') {
    pool = new Pool({connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }});
} else {
    pool = new Pool({connectionString: process.env.DATABASE_URL});
}
// Testando a conexão com o banco de dados.
pool.query("SELECT CURRENT_TIMESTAMP", (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.rows[0])
    }
})


// Usado para verificar se o microserviço está operando
app.get('/', (req, res) => res.json({ message: '[OK] IoT DataShare is running!!!' }));

// Retorna a data e hora atual do servidor PostgreSQL
app.get('/datahora', (req, res) => {
    pool.query("SELECT CURRENT_TIMESTAMP as datahora", (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.json(results.rows);
        }
    })
})


//tratamento de request de login
app.post("/login", (req, res) => {

    console.log("POST /login")
  
      const email = req.body.email;
      const password = req.body.password;
  
      let SQL = `SELECT * FROM usuario WHERE email = '${email}';`;
  
      pool.query(SQL, (err, result) => {
          if (err) {
                console.error(err);
          res.send(err);
          }

        if (result.rowCount === 1) {
            if (password === result.rows[0].senha) {
                res.send({ msg: "Usuário logado. Bem vindo!", isAuthenticated: true })
            } else {res.send({ msg: "Senha incorreta" })}
        }
          else {res.send({ msg: "Usuário inexistente"})}
      }
  )
  });


// Dispositivos IOT
app.get('/search/:id?', (req, res) => {

    let filter ='';
    if(req.params.id) filter = ' AND id = ' + parseInt(req.params.id);
    
    let SQL = " SELECT id, nome, descricao \
    FROM   dispositivo \
    WHERE  permissao_id = 'PB' " + filter

    console.log(SQL)

    pool.query(SQL, (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.json(results.rows);
        }
    })
})


// Área logada (Profile)
//Exibição de dados no perfil
app.post("/profile", (req, res) => {

    console.log("POST /profile =>", req.body.email)
    const { email } = req.body

    let SQL = `(SELECT  d.nome as nome, d.descricao as descricao,  d.link_publicacao as link_publicacao, 'S' as dono   
                FROM    dispositivo d, usuario u 
                WHERE   d.usuario_id = u.id 
                AND     u.email = '${email}')
                UNION (
                SELECT d.nome as nome, d.descricao as descricao, s.link_aquisicao as link_publicacao, 'N' as dono  
                FROM   dispositivo_seguido s, dispositivo d, usuario u 
                WHERE  d.id = s.dispositivo_id  
                AND    s.usuario_id = u.id
                AND    u.email = '${email}'
            ) ORDER BY 1 asc;`
  
    console.log(SQL);

    pool.query(SQL, (err, result) => {
        console.log(result.rows[0]);
        res.send(result.rows);
    })
})

// Dispositivos IOT
app.get('/disp/:id?', (req, res) => {

    let filter ='';
    if(req.params.id) filter = req.params.id;
    
    let SQL = " SELECT d.id as id,                         \
                        d.nome as nome,                    \
                        d.descricao as descricao,          \
                        d.local as local,                  \
                        d.escala as escala,                \
                        p.descricao as permissao           \
                FROM    dispositivo d,                     \
                        permissao p                        \
                WHERE   d.permissao_id = p.id              \
                AND     link_publicacao = '" + filter  + "'"

    console.log(SQL)

    pool.query(SQL, (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.json(results.rows);
        }
    })
})

//PESQUISA
app.post("/pesquisa", (req, res) => {

    console.log("POST /pesquisa");
    const { formPesquisa } = req.body
  
    let SQL = `SELECT id, nome, descricao, link_publicacao FROM dispositivo WHERE lower(descricao) like lower('%${formPesquisa}%');`
    console.log(SQL);
  
    pool.query(SQL, (err, result) => {
      if (err) {
        console.log("POST /pesquisa err");
        console.log(err);
      } else {
        console.log("POST /pesquisa query ok");
        console.log(result.rows);
        res.send(result.rows);
      }
    })
  
  });

  //PESQUISA
app.get("/pesquisa", (req, res) => {

    console.log("GET /pesquisa");
    const { formPesquisa } = req.body
  
    let SQL = `SELECT id, nome, descricao, link_publicacao FROM dispositivo;`
    console.log(SQL);
  
    pool.query(SQL, (err, result) => {
      if (err) {
        console.log("POST /pesquisa err");
        console.log(err);
      } else {
        console.log("POST /pesquisa query ok");
        console.log(result.rows);
        res.send(result.rows);
      }
    })
  
  });

// Publicação dos dados do dispositivo IoT por parte do proprietário
// ipub => Iot PUBlication
app.post('/ipub', (req, res) => {
    const { data }  = req.body;
    const { token } = req.body;
    
    let SQL = "SELECT id FROM dispositivo WHERE link_publicacao = '" + token + "';";

    pool.query(SQL, (error, results) => {
        if (error) {
            res.json(error); 
        } else {
            let SQL = "INSERT INTO dados (dispositivo_id, valor, datahora) \
                       VALUES ('" + results.rows[0].id + "' , \
                       '" + data + "', CURRENT_TIMESTAMP)";
            console.log(SQL);
            pool.query(SQL, (error, results) => {
                if (error) {
                    res.json(error);
                } else {
                    res.json('message: OK');
                }
            })
        }
    })

})


// Leitura dos dados do dispositivo IoT por parte do seguidor
// GID => Get Iot Data
app.get('/gid/:token', (req, res) => {
    
    let filter ='';
    if(req.params.token) filter = req.params.token;
    
    let SQL = " SELECT datahora, valor FROM dados \
                WHERE dispositivo_id = (          \
                    SELECT id FROM dispositivo \
                    WHERE link_publicacao='" + filter + "') \
                ORDER BY datahora DESC LIMIT 1 "  

    console.log(SQL); 

    pool.query(SQL, (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.json(results.rows);
        }
    })
})



// Cadastro de usuários
// ipub => Iot PUBlication
app.post('/register', (req, res) => {
    const { formUserName }  = req.body;
    const { formEmail }     = req.body;
    const { formPassword }  = req.body;
    
    let SQL = " INSERT INTO usuario(nome, email, senha) \
                VALUES ('" + formUserName + "','"+ formEmail +"','" + formPassword + "') \
                RETURNING '" + formUserName + "','"+ formEmail +"','" + formPassword + "';"

    pool.query(SQL, (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.json(results.rows);
        }
    })
        
})



app.listen(process.env.PORT);
console.log('API funcionando!');

