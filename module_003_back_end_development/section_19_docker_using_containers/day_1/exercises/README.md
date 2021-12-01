# Exercícios Bloco 19 dia 1

1. No Docker Hub , utilizando a caixa de busca ( "Search for great content" ) , busque pela imagem da Distribuição Linux Debian;
2. Uma vez que encontrar a imagem oficial , acesse-a (clicando em seu card) e verifique na página de detalhes, se existe algum comando para baixarmos a imagem localmente sem ter que criar um container para isso;
```bash
docker pull
```
3. Baixe a imagem utilizando a tag : stable-slim , que é uma versão reduzida da distribuição;
```bash
docker pull debian:stable-slim
```
4. Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag );
```bash
docker container run -it debian:stable-slim
```
5. No terminal, você deve conseguir rodar o comando cat /etc/*-release , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container;
```bash
cat /etc/*-release
```
6. Encerre o terminal;
```bash
exit
```
7. Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar;
```bash
docker ps -a OU docker container list -a
```
8. Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers;
```bash
docker container start [id do container] OU docker container start [nome do container]
```
9. Retome o container que foi criado anteriormente nesse exercício;
```bash
docker container attach [id do container] OU docker container attach [nome do container]
```
10. Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container;
```bash
cat /etc/debian_version
```
11. Encerre o terminal;
```bash
exit
```
12. Remova somente o container criado para esse exercício;
```bash
docker container rm [id do container] OU docker container rm [nome do container]
```
13. (Bônus) Crie e rode de modo interativo em modo 'Cleanup' , a imagem andrius/ascii-patrol;
```bash
docker container run --rm andrius/ascii-patrol
```
14. (Bônus) Encerre o container utilizando os botões [ ctrl ] + [ c ].
