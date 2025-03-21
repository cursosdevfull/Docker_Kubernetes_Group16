# NGINX - Volumen de tipo Named

### Crear un volumen nombrado
```
docker volume create <nombre volumen>
```

### Listar volúmenes
```
docker volume ls
```
### Inspeccionar un volumen
```
docker volume inspect <nombre del voluemn>
```

### Contenedor con un volumen nombrado o named
```
docker run -d --name server-web -p 5000:80 -v vol-nginx:/usr/share/nginx/html nginx:alpine
```


### Ubicación de volumenen en WSL
```
\\wsl.localhost\docker-desktop\mnt\docker-desktop-disk\data\docker\volumes
```