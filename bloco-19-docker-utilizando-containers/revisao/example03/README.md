# Exercício 3

Uma pessoa estudante está com problemas ao configurar seu **Dockerfile**. Debugue e encontre o problema!

O objetivo da imagem Docker da pessoa é executar um script simples na linguagem Python, porém ao executar o container, nada acontece! :(

> Explicação: No Dockerfile estava descrito para ser utilizando "RUN" ao invés de "CMD", que por sua vez roda o comando durante a build do container.
