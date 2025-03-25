# Políticas de reinicio

### Nunca reiniciar
```
docker run -d --name server-web01 --restart=no nginx:alpine sh -c "cat archivo_no_existe"
```
### Reinicia en caso ocurra un error o una falla
```
docker run -d --name server-web02 --restart=on-failure nginx:alpine sh -c "exit 1"
```
### Reinicia siempre a menos que lo detenga manualmente con docker stop
```
docker run -d --name server-web03 --restart=unless-stopped nginx:alpine sh -c "sleep 3; exit 1"
```

### Reiniciar siempre
```
docker run -d --name server-web04 --restart=always nginx:alpine sh -c "sleep 3; exit 1"
```