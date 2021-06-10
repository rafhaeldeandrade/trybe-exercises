#!/bin/bash
#Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
#curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
mkdir unix_tests
cd unix_tests
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

#Mostre todo o conteúdo do arquivo countries.txt na tela.
cat countries.txt

#Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia .
less countries.txt

#Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia .


#Busque por Brazil no countries.txt .
#Busque novamente por brazil , mas agora utilizando o lower case .
#Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.
#Busque pelas frases que não contenham a palavra fox .
#Conte o número de palavras do arquivo phrases.txt .
#Conte o número de linhas do arquivo phrases.txt .
#Crie os arquivos empty.tbt e empty.pdf .
#Liste todos os arquivos do diretório unix_tests .
#Liste todos os arquivos que terminem com txt .
#Liste todos os arquivos que terminem com tbt ou txt .
#Acesse o manual do comando ls .

