# Contenedor

### Crear
```
docker create <nombre de la imagen>:<version o tag>
docker create --name <nombre del contenedor> <nombre de la imagen>:<version o tag>
```

### Listar los contenedores que se están ejecutando
```
docker ps
```

### Listar los contenedores
```
docker ps -a
```

### Crear un contenedor usando el comando "run"
```
docker run nginx:alpine
docker run -d <nombre de la imagen>:<version o tag>
```

### Eliminar
```
docker rm <nombre o id o token del contenedor>
```

```
docker stop <nombre o id o token del contenedor>
docker rm <nombre o id o token del contenedor>
```
```
docker rm -f <nombre o id o token del contenedor>
```
### Crear contenedor con nombre
```
docker run -d --name <nombre del contenedor> <nombre de la imagen>:<version o tag>
```

### Mapeo de puertos
```
docker run -d --name <nombre del contenedor> -p <puerto host>:<puerto container> <nombre de la imagen>:<version o tag>
docker run -d --name <nombre del contenedor> -p <puerto host>:<puerto container>  -p <puerto host>:<puerto container> <nombre de la imagen>:<version o tag>
```
### Inspeccionar
```
docker inspect <nombre o id o token del contenedor>
```