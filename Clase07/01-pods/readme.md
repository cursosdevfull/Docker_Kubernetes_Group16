# Pods

### Listar recursos de Kubernetes
```
kubectl api-resources
```

### Listar pods
```
kubectl get pods
kubectl get po
```

### Port forward
```
kubectl port-forward server 7000:80
```

### Ejecutar un manifiesto
```
kubectl apply -f 01-pod.yml
```

### Eliminar un manifiesto
```
kubectl delete -f 01-pod.yml
```

### Describir un pod
```
kubectl describe po pod-nginx
```

### Visualizar los logs
```
kubectl logs pod-nginx
kubectl logs pod-nginx -c web
```
### Ingresar a un contenedor
```
kubectl exec -it pod-nginx -- sh
kubectl exec -it pod-nginx -c web -- sh
```

### Visualizar el manifiesto de un pod
```
kubectl get po pod-nginx -o yaml
```

### Listar los pods con sus etiquetas
```
kubectl get po --show-labels
```

### Filtrar pods por etiqueta
```
kubectl get po -l env=dev
kubectl get po --show-labels -l env=dev
```