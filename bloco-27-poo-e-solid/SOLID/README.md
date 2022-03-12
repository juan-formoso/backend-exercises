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
