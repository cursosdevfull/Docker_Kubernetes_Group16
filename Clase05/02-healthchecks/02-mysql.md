# Healthcheck MySQL

```
docker run -d \
    --name server-mysql01 \
    --health-cmd="mysqladmin ping -h localhost" \
    --health-interval=10s \
    --health-retries=3 \
    --health-start-period=10s \
    -e MYSQL_ROOT_PASSWORD=12345 \
    mysql:8
```