# Healthcheck Nginx

```
docker run -d \
    --name server-web05 \
    --health-cmd="curl http://localhost" \
    --health-interval=10s \
    --health-retries=3 \
    --health-start-period=15s \
    --health-timeout=10s \
    nginx:alpine
```