## Para iniciar o projeto
### Clone o projeto com
```
git clone git@github.com:felipebaloneker/windesign-back.git
```

### Crie o banco de dados com Docker
instale o docker composer na sua maquina, abra o vscode na pasta do projeto e execute o seguinte script no terminal:

```
docker-compose up -d
```
ele cria um banco de dados postgres apartir do arquivo 'docker-compose.yml' na raiz do projeto.

### Crie um arquivo '.env' na raiz do projeto e adicione as seguintes linhas:
```
TYPEORM_CONNECTION=postgres
TYPEORM_HOST=localhost
TYPEORM_USERNAME=postgres
TYPEORM_PASSWORD=12345
TYPEORM_DATABASE=postgres
TYPEORM_PORT = 5432
TYPEORM_MIGRATIONS = src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR = src/database/migrations
```

### Instale  as dependencias:
```
yarn install
```
### Crie as tabelas no banco com:
```
yarn typeorm migrations:run
```

### inicie o servidor com:
```
yarn dev
```
