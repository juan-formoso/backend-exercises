# SOLID - Introduction

## S Principle
Single-responsibility principle

Este príncipio implica que uma classe, componente, entidade ou função deve ter **Uma única reponsabilidade**

### Robot Example
* Wrong:

Robot says --> I'm a chef, a gardener, a painter & driver

* Right:

You have 4 different robots --> a chef, a gardener, a painter and a driver

```
const robots = {
  input: require("./robots/input.js");
  text: require("./robots/text.js");
  state: require("./robots/state.js");
  image: require("./robots/image.js");
  video: require("./robots/video.js");
  youtube: require("./robots/youtube.js");
}

const start = async () => {
  robots.input();
  await robots.text();
  await robots.image();
  await robots.video();
  await robots.youtube();
};

start();
```

* Vantagens: reaproveitamento de código, refatoração, testes automatizados, menos bugs e facilidade de novas implementações.

### Responsabilidade de um componente
Como saber os limites da responsabilidade de um?

> "Basta um componente no lugar errado em um software acoplado para danificar todo o seu funcionamento!"

* Ao invés de ter uma máquina chamada "Usuário" faça uma com o ato de Login e outra com o ato de Cadastro.

* Coloque no nome dessa entidade TUDO o que ela faz. Caso fique algo como `function registrationAndEmailConfirmationAndAuthentication() {...}` significa que essa entidade já possui responsabilidades demais...

* Cuidado com Design Prematuro!

## O principle
Open-closed principle

* Classes entidades e funções devem estar abertas à extensões porém fechadas à modificações.

### Robot Example
* Wrong:

Robot says --> I can cut
Robot says again --> Now, I can paint

* Right:

Robot says --> I can cut
Robot says again --> Now, I can cut and paint

Na prática, isso significa que a entidade deve apenas ter novos caminhos para novas situações e não uma exclusão de antigos caminhos.

### Online Payments Example
Imagine que você tem uma aplicação que recebe pagamentos, ela recebe um objeto **Cartão** e faz as seguintes verificações:
  `ProcessaPagamentos(cartao)`
    `cartao.numero?`
    `cartao.vencimento?`
    `cartao.nome?`
    `antifraude(cartao)`
    `cobrar(cartao)`
  
Você conseguiu processar pagamentos com cartão de crédito! Faltam os de débito e processar boletos!

Débitos funcionam praticamente da mesma maneira que os de crédito porém boletos não!

E para resolver isso você resolveu quebrar o príncipio S alterando a classe base de pagamentos adicionando o sguinte código:
  ```ProcessaPagamentos(objeto)
      if(objeto.tipo == objeto)
        objeto.codigoDeBarras?
      else
        objeto.numero?
        objeto.vencimento?
        objento.nome?
        antifraude(objeto)
      cobrar(objeto)
  ```

Agora ferrou! Pois para cada novo tipo de pagamento que entrar você terá que implementar ele e também suas modificações no processador de pagamentos, fazendo com que **suas regras de negócio comecem a bagunçar todos os componentes**

E como resolver isso? Utilizando o nível de abstração correto! Aquela abstração base de processar pagamentos não deveria saber os campos específicos de cada dado para validar ou sequer ter o sistema antifraude! No máximo ela deveria possuir:
  ```ProcessaPagamentos(instrumento)
      instrumento.valido?
      instrumento.cobrar!
  ```

Essa abstração define corretamente o caminho que o processo deveria seguir! Você nunca mais irá precisar alterar a base de processamentos.

* Um bom exemplo é o ORM que suporta Drivers/Conectores de vários bancos de dados diferentes.
  > Um ORM é capaz de relacionar as propriedades de um objeto com as colunas de um banco de dados utilizando métodos genéricos para realizar as operações.
  > Sem alterar o código fonte do ORM você consegue utilizá-lo para vários DBs diferentes!

* O modelo correto que você deve ter em mente é o de **plugins!** Como as extensões instaladas no seu navegador.
  > Nem você nem o dono da extensão precisou verificar o binário do Navegador para fazer ele funcionar, pois ele já respeita as regras de contrato.
  > Ele modifica o navegador mas mantém sua base.

## L Principle
Liskov Substitution Principle

O princípio defende que se temos uma classe e delas criarmos uma subclasse usando **herança** o objeto ou instância resultante dessa subclasse deve conseguir substituir os da classe anterior sem quebrar a aplicação.

### Robot Example
* Context:

Robot Father says --> Hi I'm Sam. I make coffee

Robot Son says --> Hi, I'm Eden. Sam's Child

Robot Client says --> Hey Sam, Can you make me coffee?

Sam says --> Here's your coffee

Eden says --> Great! Thanks

* Wrong:

Robot Client says --> Hey Eden, Sam is not here right now. Can you make me coffee?

Eden says --> I can't make coffee but here's water

Robot Client says --> >:(

* Right:

Robot Client says --> Hey Eden, Sam is not here right now. Can you make me coffee?

Eden says --> Sure! Here's a cappuccino

Client says --> Great! Thanks

### Birds Example
```
Ave()
  bicar!
  voar!

    PicaPau()
      bicar!
      voar!

    Pinguim()
      bicar!
      voar#
```

> Se a cada herança que você fazer, você está lutando com o que herda, você precisa desfazer o que herdou, é bem capaz que você já tenha começado com a abstração errada.

## I Principle
Interface Segregation Principle

* Esse princípio diz que clientes não devem ser forçados a depender de métodos que eles não usam!

* Entenda clientes como uma classe que é forçada a implementar uma interface com métodos que ela não vai precisar.

### Robot Example
* Wrong:

**BLACK BOARD**
EXERCISES
All Robots
-------------------
- Spin around
- Rotate arms
- Wiggle antennas

Robot without antennas says --> Oops! But I don't have antennas

* Right:

**BLACK BOARD**
EXERCISES
-----------------------------------

1. Robots that can spin around
  - Spin around

2. Robots that can rotate arms
  - Rotate arms

3. Robots that can wiggle antennas
  - Wiggle antennas

Both kind of robots says --> AWESOME!

## D Principle
Dependency Inversion Principle

* Esse princípio defende que um módulo não deve depender dos detalhes e implementação de outro módulo de maneira direta. Deve existir uma abstração entre eles, como uma interface.

### Robot Example
* Wrong:

Robot says --> I cut pizza with my pizza cutter arm

**Edward Mãos de Tesoura alike...**

* Right:

Robot says --> I cut pizza with any tool given to me
