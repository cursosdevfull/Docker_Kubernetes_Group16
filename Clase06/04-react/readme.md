# React

### Crear la imagen
```
docker build -f appSimple/Dockerfile-react -t appsimple --build-arg DIR=appSimple .
```

### Crear el contenedor
```
docker run -d -p 3500:80 appSimple
```