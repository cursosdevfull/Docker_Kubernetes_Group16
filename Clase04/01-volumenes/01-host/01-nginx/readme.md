# NGINX

### Solo contenedor
```
docker run -d --name server-web -p 5000:80 nginx:alpine
```

### Contenedor con volumen host usando ruta absoluta
```
docker run -d --name server-web -p 5000:80 -v D:\\Cursos\\Docker_Kubernetes_Group16\\Clase04\\01-volumenes\\01-host\\01-nginx\\html:/usr/share/nginx/html nginx:alpine
```

### Contenedor con volumen host usando ruta relativa (Git Bash)
```
docker run -d --name server-web -p 5000:80 -v $(pwd -W)/html:/usr/share/nginx/html nginx:alpine
```

### Contenedor con volumen host usando ruta relativa (Powershell)
```
docker run -d --name server-web -p 5000:80 -v ${PWD}/html:/usr/share/nginx/html nginx:alpine
```