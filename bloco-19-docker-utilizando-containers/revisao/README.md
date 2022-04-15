## Commands

- Docker build - Constrói uma imagem Docker a partir das instruções contidas no arquivo de texto chamado Dockerfile.

- Docker run - Executa uma imagem Docker como um container Docker.

- Docker images - Lista as imagens Docker atualmente em sua máquina.

- Docker ps - Lista os container em execução atualmente em sua máquina.

- Docker stop - Para a execução de um container.

- Docker rm - Apaga um container Docker que foi parado em sua máquina.

## Images vs Containers

**Imagem**

> Versão "empacotada" do seu projeto.
> Você pode criar uma Imagem Docker enviá-la para outros lugares, para que seja executada mais tarde.
> Não existe terminal dentro da Imagem, ela não está em execução!

Analogia: - Imagem Docker -> Arquivo .ISO quando vamos formatar um PC (é o sistema operacional empacotado).

**Container**

> É uma imagem Docker que está em execução ou parada no momento.
> Não existe container sem uma imagem.
> Você pode entrar no terminal de um container!

Analogia: - Container Docker -> Programa que você executou após descompactá-lo de um arquivo zipado.
