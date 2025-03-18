# Redis

```
docker run -d --name server-redis -p 6380:6379 redis:alpine
```

### Cliente
```
docker run -d --name client-redis -p 5500:8081 -e REDIS_HOSTS=local:172.17.0.3:6379 rediscommander/redis-commander:latest
```

