#!/bin/bash
#Crie um diretório com nome unix_tests e navegue até ele.
mkdir unix_tests
cd unix_tests

#Crie um arquivo de texto com o nome trybe.txt .
touch trybe.txt

#Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .
cp trybe.txt trybe_backup.txt

#Renomeie o arquivo trybe.txt .
mv trybe.txt trybe_renomeado.txt

#Dentro de unix_tests , crie um novo diretório chamado backup .
mkdir backup

#Mova o arquivo trybe_backup.txt para o diretório backup .
mv trybe_backup.txt backup

#Dentro de unix_tests , crie um novo diretório chamado backup2 .
mkdir backup2

#Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .
mv backup/trybe_backup.txt backup2

#Apague a pasta backup .
rmdir backup

#Renomeie a pasta backup2 para backup .
mv backup2 backup

#Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
pwd
ls -a

#Apague o diretório backup .
rm -rf backup

#Limpe o terminal.
clear -x
