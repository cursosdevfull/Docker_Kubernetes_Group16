# NGINX CUSTOM

### Contenedor con volumen host usando ruta relativa con un solo volumen
```
docker run -d --name server-web -p 5000:80 -v $(pwd -W)/www:/app nginx:alpine
```

### Contenedor con volumen host usando ruta relativa con más de un volumen
```
docker run -d --name server-web \
        -p 5000:80 \
        -v $(pwd -W)/www:/app \
        -v $(pwd -W)/config/nginx.conf:/etc/nginx/conf.d/default.conf \
        nginx:alpine
```

### Contenedor con volumen host usando ruta relativa con más de un volumen
```
docker run -d --name server-web \
        -p 5000:4200 \
        -v $(pwd -W)/www:/app \
        -v $(pwd -W)/config/nginx.conf:/etc/nginx/conf.d/default.conf:ro \
        nginx:alpine
```