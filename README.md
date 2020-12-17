Este projeto foi desenvolvido com Angular versão 9.1.7

Para executar a aplicação, execute o comando abaixo no diretorio raiz do projeto

    1. npm install
    2. ng serve

    A aplicação subirá no endereço http://localhost:4200 


Para executar os testes, execute o comando abaixo no diretorio raiz do projeto

    1. ng test



Documentação

O projeto possui duas paginas

    1. selecao-filmes
        Nesta pagina o usuario recebrá 16 filmes pré selecionados e escolherá 8 filmes para participar da competição
        Ao selecionar os 8 filmes desejados, o botão "Gerar Meu Campeonato" será habilitado.
        Ao clicar no botão "Gerar Meu Campeonato", o usuário será direcionado para a tela resultado-competicao, que será descrita abaixo.

    2. resultado-competicao
        Nesta pagina o usuario receberá o campeão e o vice campeão dentre os filmes selecionados.
        Caso queria iniciar um novo campeonato, o usuario deverá clicar no botão "Iniciar Novo Campeonato". Ao clicar neste botão, o usuario será direcionado para a tela selecao-filmes descrita acima