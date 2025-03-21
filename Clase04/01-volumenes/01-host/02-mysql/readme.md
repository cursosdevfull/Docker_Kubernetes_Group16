# MySQL

### Solo contenedor
```
docker run -d --name server-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 mysql:8
```

### Contenedor con volumen
```
docker run -d --name server-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -v $(pwd -W)/data:/var/lib/mysql mysql:8
```
