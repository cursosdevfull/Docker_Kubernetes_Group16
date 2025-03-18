# Redes

### Crear una red de tipo bridge
```
docker network create <nombre de la red> -d bridge
```

### Listar
```
docker network ls
```

### Inspeccionar
```
docker network inspect <nombre de la red>
```

### Crear red con subnet y gateway
```
docker network create <nombre de la red> -d bridge --subnet <subnet> --gateway <gateway ip>
```

### Crear contenedor vinculado a una red
```
docker run -d --name <nombre contenedor> --network <nombre de la red> <imagen>:<tag>
docker run -d --name <nombre contenedor> --network <nombre de la red> --ip <direccion ip> <imagen>:<tag>
```

### Conectar un contenedor a una red
```
docker network connect <nombre o id o token de la red> <nombre o id del contenedor>
```

### Desconectar un contenedor de una red
```
docker network disconnect <nombre o id o token de la red> <nombre o id del contenedor>
```
