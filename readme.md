#build da imagem
docker build -t backoffice-db .

#rodando o container
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=RootPassword -e MYSQL_DATABASE=Backoffice -e MYSQL_USER=MainUser -e MYSQL_PASSWORD=MainPassword backoffice-db

#comandos do sequelize
npx sequelize-cli init

#cria um novo model
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string
npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly
npx sequelize-cli model:create --name Matriculas --attributes status:string

#executando as migrations no banco
npx sequelize-cli db:migrate

#executando os seeders
npx sequelize-cli seed:generate --name demo-pessoa

#migrando os seeders para o banco
npx sequelize-cli db:seed:all
