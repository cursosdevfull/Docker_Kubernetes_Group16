# MYSQL

```
docker run -d --name server-mysql -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=db -e MYSQL_USER=user -e MYSQL_PASSWORD=12345 mysql:8
```

### Client
```
docker run -d --name client-mysql -p 8090:80 -e PMA_ARBITRARY=1 phpmyadmin:5.2.2
```