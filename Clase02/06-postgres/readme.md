# Postgres

```
docker run -d --name server-postgres -e POSTGRES_PASSWORD=12345 postgres:16.8-alpine3.20
```

### Cliente
```
docker run -d --name client-postgres -p 8100:80 -e PGADMIN_DEFAULT_EMAIL=sergiohidalgocaceres@gmail.com -e PGADMIN_DEFAULT_PASSWORD=12345 dpage/pgadmin4:8
```

### Cliente usando un archivo de variables de entorno
```
docker run -d --name client-postgres -p 8100:80 --env-file config/environment.txt dpage/pgadmin4:8
```