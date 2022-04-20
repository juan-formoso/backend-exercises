# SOLID Aplicado

**Na teoria, teoria e prática são a mesma coisa. Na prática, não.**

## O que é S.O.L.I.D?

Acrônimo das boas práticas que visam melhorar a construção e arquitetura de um projeto. Com o intuito de facilitar a manutenção dele e a compreensão ao ler o código do projeto.

## O que é Programação Orientada a Objetos?

É um paradigma que ajuda as pessoas a assimilar e a desenvolver fazendo **abstrações** do mundo real através do código.

> Muitos desenvolvedores optam por POO pelos seus 4 pilares.

1. Abstração: Abstração de um objeto do mundo real para o código.

2. Encapsulamento: Embrulha propriedades de uma classe.

3. Polimorfismo: **Adaptabilidade**. Na biologia, plantas e animais tem com o intuito de sobrevivência.

4. Herança: Extremamente utilizada para a diminuição de código.

### SOLID

- S = Single Responsability Principle (SRP)

  > Tudo deve ter apenas uma responsabilidade. A classe só deve ser alterada se for para mudar diretamente o que ela faz.

- O = Open-Closed Principle (OCP)

  > Herança e Fechamento.s

- L = Liskov Substitution Principle (LSP)

  > Você pode trocar quem tá trabalhando para resolver aquele problema, sem que quem use aquilo precise saber disso. **Você pode alterar uma classe sem que quem use ela seja afetado por isso.**

- I = Interface Segregation Principle (ISP)

  > Classes e interfaces não devem possuir métodos que ela não usam. Devem possuir apenas o necessário.

- D = Dependency Inversion Principle (DIP)

  > Você pode trocar o responsável por uma abstração. **Exemplo: você tem seus serviços e quer trocar uma classe de envio de email porém você utiliza ela para outros serviços e em determinado momento você troca seu provedor de email, logo você terá que passar por todas as classes e fazer essa alteração. O Correto é criar uma abstração que faça todo isso.**
