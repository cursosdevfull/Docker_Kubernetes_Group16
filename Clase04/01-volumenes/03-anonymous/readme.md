# Redis

### Crear un contenedor con un volumen anónimo
```
docker run -d --name server-redis -v /data redis:alpine
```

### Cliente de Redis
```
docker run -d --name client-redis -p 8081:8081 -e REDIS_HOST=172.17.0.3 rediscommander/redis-commander
```

### Eliminar el contenedor
```
docker rm -fv server-redis
```