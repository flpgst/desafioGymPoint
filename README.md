# Desafio Final RocketSeat
Aplicação desenvolvida em JavaScript com BackEnd em NodeJS, FrontEnd Web em ReactJS e FrontEnd Mobile em React Native

# Backend

Para o backend rodar todas as features, além de instalar todas as dependências da aplicação (yarn ou npm install) serão necessários instâncias do PostgreSQL, Redis e MongoDB. Durante a execução do projeto estes três banco de dados foram utilizados rodando em Docker.
Além disso é necessário a criação do arquivo .env assim como descrito no arquivo .env.example

Para criar e popular o banco de dados é necessário a execução dos scripts: 
yarn sequelize db:migrate
yarn sequelize db:seed:all

Para rodar o backend é necessário a execução do script:
yarn dev

# Frontend Web

Para rodar o Frontend Web é necessário apenas instalar as dependências (yarn ou npm install) e executar o script:
yarn start

O navegador irá abrir na tela de login da aplicação.
Dados do login inicial:
Login: admin@gympoint.com
Senha: 123456

Um aluno deve ser criado no Frontend Web, para que possa fazer acesso ao Mobile, após criar a matrícula desse aluno o ID para acesso o Mobile será mostrado na lista de matrículas.

# Frontend Mobile

O Frontend Mobile foi desenvolvido apenas para sistemas Android, devido a falta de disponbilidade de dispositivos IOS para testes.

Para rodar o Frontend Mobile é necessário apenas instalar as dependências (yarn ou npm install) e executar os scripts:
npx react-native run-android
npx react-native start

A aplicação está configurada para rodar no emulador Genymotion, se for necessário rodar em outra plataforma deve ser configurado a variável baseURL no arquivo:
/mobile/src/services/api.js

Para debugar a aplicação com o Reactotron é necessário configurar o IP do seu computador no arquivo:
mobile/src/config/ReactotronConfig.js


