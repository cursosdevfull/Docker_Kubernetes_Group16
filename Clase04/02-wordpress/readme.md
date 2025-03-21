# Wordpress

### Red
```
docker network create net-wp -d bridge
```
### Volúmenes
```
docker volume create vol-wp
docker volume create vol-mysql
```

### MySQL
```
docker run -d --name server-mysql \
    -e MYSQL_ROOT_PASSWORD=12345 \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=12345 \
    -e MYSQL_DATABASE=wpdb \
    -v vol-mysql:/var/lib/mysql \
    --network net-wp \
    mysql:8
```
### Wordpress
```
docker run -d --name server-wp \
    -e WORDPRESS_DB_HOST=172.22.0.2:3306 \
    -e WORDPRESS_DB_USER=root \
    -e WORDPRESS_DB_PASSWORD=12345 \
    -e WORDPRESS_DB_NAME=wpdb \
    -p 9000:80 \
    -v vol-wp:/var/www/html \
    --network net-wp \
    wordpress

```