# Contexto

### Listar
```
kubectl config view
```

### Crear un contexto
```
kubectl config set-context course-16-ctx --cluster=docker-desktop --user course_16
```
### Verificar la configuración
```
kubectl config view --minify
```

### Cambiar de contexto
```
kubectl config use-context <nombre del contexto>
```