#Essa foi a tentativa do projeto
#RM555317 Fernando Fontes, RM556814 Guilherme Jardim

README - Aplicativo de Gerenciamento de Estoque

Este README fornece um guia passo a passo para rodar o aplicativo de gerenciamento de estoque desenvolvido com React Native e Expo.
Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

    Node.js: (Versão LTS recomendada) - Você pode baixar o instalador oficial em https://nodejs.org/.
    npm (geralmente instalado com o Node.js) ou yarn (https://yarnpkg.com/).
    Expo CLI: Instalado globalmente via npm ou yarn:
    Bash

    npm install -g expo-cli
    # ou
    yarn global add expo-cli

    Expo Go (Opcional para testar em dispositivo físico): Baixe o aplicativo "Expo Go" na App Store (iOS) ou Google Play Store (Android) no seu dispositivo.
    Emulador Android ou Simulador iOS (Opcional para testar no computador):
        Android: Requer a instalação do Android Studio e a configuração de um emulador.
        iOS: Requer um Mac com o Xcode instalado para usar o simulador iOS.

Passo a Passo para Rodar o Projeto

    Clone o Repositório (se aplicável):
    Se o código do projeto estiver em um repositório Git (como o GitHub), clone-o para sua máquina:
    Bash

git clone <URL_DO_REPOSITORIO>
cd estoque-app

(Substitua <URL_DO_REPOSITORIO> pelo endereço do repositório).

Instale as Dependências:
Navegue até o diretório raiz do projeto (estoque-app no exemplo acima) e instale as dependências listadas no arquivo package.json usando npm ou yarn:
Bash

npm install
# ou
yarn install

Este comando baixará todas as bibliotecas necessárias para o projeto (React, React Native, Expo Router, etc.).

Inicie o Servidor Expo:
No mesmo diretório raiz do projeto, execute o comando para iniciar o servidor de desenvolvimento do Expo:
Bash

npx expo start
# ou
yarn start

Este comando irá abrir o Expo Developer Tools no seu navegador. Você verá um QR code e algumas opções para executar o aplicativo.

Execute o Aplicativo:
Você tem as seguintes opções para visualizar e interagir com o aplicativo:

    Usando o Expo Go (Dispositivo Físico):
        Certifique-se de que seu dispositivo móvel (onde o Expo Go está instalado) esteja conectado à mesma rede Wi-Fi do seu computador.
        Abra o aplicativo Expo Go no seu dispositivo.
        No aplicativo Expo Go, toque em "Escanear QR Code" e aponte a câmera para o QR code exibido no Expo Developer Tools no seu navegador.
        O aplicativo deverá abrir no seu dispositivo.

    Usando um Emulador Android:
        Certifique-se de que seu emulador Android esteja configurado e rodando.
        No Expo Developer Tools no seu navegador, você pode ver uma opção para "Run on Android emulator". Clique nela.
        O Expo tentará abrir o aplicativo no seu emulador.

    Usando um Simulador iOS (macOS necessário):
        Certifique-se de que o Xcode esteja instalado no seu Mac.
        No Expo Developer Tools no seu navegador, você pode ver uma opção para "Run on iOS simulator". Clique nela.
        O Expo tentará abrir o aplicativo no simulador iOS.