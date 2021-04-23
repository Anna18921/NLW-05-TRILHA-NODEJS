
<img src="https://user-images.githubusercontent.com/53823948/115298216-9202e780-a133-11eb-925a-e6ab6dc91e00.jpg" width="100%" height="380"/>


<h1 align="center">
NLW-05-TRILHA-NODEJS
</h1>

<p align="center"> <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?logo=node.js&logoColor=white"/>
  <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?logo=javascript&logoColor=%23F7DF1E"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?logo=typescript&logoColor=white"/>
  <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?logo=html5&logoColor=white"/>
  <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?logo=css3&logoColor=white"/>
</p>

<details>
<summary> Dia 1 - Fundamentos do NodeJS </summary>

 + O que é NodeJS ?
 + O que é uma API?
 + Por que usar Typescript?
 + Configuração do Ambiemte
 + Criação do Projeto
 + Instalação das dependecias 

</details>

<details>
<summary> Dia 2 - Iniciando com o Banco de Dados </summary>
  
 + Quais são as formas de trabalhar com Banco de Dados
 + Configurando o typeorm
 + O que são migrations
 + Criando as migrations
 + Criando as entidades
 + Criando os repositórios
 + Criando a rota das configurações
 + Configuração do banco de dados `sqlite3` utilizando o `typeorm` 
 + Entendo para que serve Uma Entidade e Repository
 + Criação das rotas de configurações

 
![chat](https://user-images.githubusercontent.com/53823948/115908804-047c0c00-a441-11eb-8caf-a4de3d8ad58f.png)
</details>


<details>
<summary>Dia 3 - Continuando a nossa aplicação</summary>

+ Criar a estrutura da tabela `messages` e `users`
+ Relacionamento `ManyToOne` e `ForeingKeys`

</details>

<details>
<summary>Dia 4 - Trabalhando com Websocket</summary>

 + O que é Websocket?
 + Instalando as dependências na aplicação
 + Configurando websocket
 + Criar estrutura de connections
 + Configurando página Atendente HTML
 
</details>


<details>
<summary>Dia 5 - Finalizando o Projeto</summary>

 + Concluir página de atendimento
 + Criar os eventos para atendimento
 + Concluir página de cliente
 + Criar evento para cliente
 + Adicionar admin a conexão
 + `Manipulação de eventos entre cliente e servidor`
 
</details>

 
#### Rodar o Projeto

 * `git clone https://github.com/Anna18921/NLW-05-TRILHA-NODEJS.git`
 * `yarn add`
 * `yarn typeorn migration:run`
 * `yarn dev`
 
##### API
* Users
```
POST: http://localhost:3333/users

Body JSON:
{ 
  email: teste@gmail.com
}
```
* Setings
```
POST: http://localhost:3333/setings

Body JSON:
{
	"chat": true,
	"username": admin
}
```
```
PUT: http://localhost:3333/settings/:username

Body JSON:
{
	"chat": false,
}

```

```
GET: http://localhost:3333/settings/:username
```
* Messages
```
POST: http://localhost:3333/messages

Body JSON:
{
	"user_id": "2354e336-6256-41ef-ad70-594e4381de07",
	"text": "Qual o seu nome?",
	"admin_id": "8c0fa187-9fd2-427c-8735-e4651ebe5d27" (opcional, admin_id = null, significa que ainda não foi atendido)
}
```
```
GET: http://localhost:3333/messages/:user_id

```

#### Acessar Frontend

* Client 
```
	http://localhost:3333/pages/client
```
* Admin 
```
	http://localhost:3333/pages/admin
```
<br/>

##### Ferramentas utilzadas
 * `Insomnia` para gerenciar API
 * `Beekeeper` Gerenciador de Banco de Dados
 * `VScode` Editor de texto

<br/>

__Este projeto foi implementado durante a `NLW05` trilha Nodejs fornececido pela Rocketseat 2021__

