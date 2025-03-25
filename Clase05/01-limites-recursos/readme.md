# Limitar el uso de memoria y procesador

### Memoria
```
docker run -d --name server-web01 --memory=10m nginx:alpine
docker run -d --name server-web02 --memory=700m --memory-swap=1g nginx:alpine
```

### Procesador
```
docker run -d --name server-web03 --cpus="1.5" nginx:alpine
docker run -d --name server-web04 --cpuset-cpus=0-2 nginx:alpine
```