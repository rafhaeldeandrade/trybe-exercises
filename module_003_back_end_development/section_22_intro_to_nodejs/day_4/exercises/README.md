# Exercícios Bloco 22 Dia 4

<ol>
  <li>
    Crie uma rota <code>GET /ping</code>
    <ul>
      <li>Sua rota deve retornar o seguinte JSON: { message: 'pong' }</li>
    </ul>
  </li>
  <li>
    Crie uma rota <code>POST /hello</code>
    <ol>
      <li>
        Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
      </li>
      <li>
        Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }.
      </li>
    </ol>
  </li>
  <li>
    Crie uma rota POST /greetings
    <ol>
      <li>
        Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
      </li>
      <li>
        Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
      </li>
      <li>
        Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
      </li>
    </ol>
  </li>
  <li>
  Crie uma rota PUT /users/:name/:age .
  <ul>
  <li>Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .</li>
  </ul>
  </li>
  <li>Crie uma API de dados das personagens de Simpsons</li>
  <ol>
  <li>Crie um arquivo chamado simpsons.json e popule com os seguintes dados:
    <code>
  [
  {
    "id": "1",
    "name": "Homer Simpson"
  },
  {
    "id": "2",
    "name": "Marge Simpson"
  },
  {
    "id": "3",
    "name": "Bart Simpson"
  },
  {
    "id": "4",
    "name": "Lisa Simpson"
  },
  {
    "id": "5",
    "name": "Maggie Simpson"
  },
  {
    "id": "6",
    "name": "Ned Flanders"
  },
  {
    "id": "7",
    "name": "Montgomery Burns"
  },
  {
    "id": "8",
    "name": "Nelson Muntz"
  },
  {
    "id": "9",
    "name": "Krusty"
  },
  {
    "id": "10",
    "name": "Milhouse Van Houten"
  }
]
  </li>
  </code>
  <li>Utilize o modulo fs do Node para ler/escrever arquivos.</li>
  <li>Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).</li>
  <li>Caso dê tudo certo, a resposta deve voltar com status 200 OK .</li>
  <li>Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman , Insomnia ou httpie .</li>
  </ol>
  </li>
  <li>Crie um endpoint GET /simpsons
  <ul><li>
O endpoint deve retornar um array com todos os simpsons.
</li></ul>
</li>
<li>Crie um endpoint GET /simpsons/:id
<ol><li>
O endpoint deve retornar o personagem com o id informado na URL da requisição.</li>
<li>
Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .</li></ol>
</li>
<li>Crie um endpoint POST /simpsons .
<ol>
<li>Este endpoint deve cadastrar novos personagens.</li>
<li>O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .</li>
<li>Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .</li>
<li>Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .</li>
</ol>
</li>
</ol>