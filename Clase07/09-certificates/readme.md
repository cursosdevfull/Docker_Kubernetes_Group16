# Certificados

### Crear el certificado privado
```
openssl genrsa -out course_16.key 2048
```

### Crear la solicitud
```
openssl req -new -key course_16.key -out course_16.csr -subj "/CN=course_16/O=developers"
openssl req -new -key course_16x.key -out course_16x.csr -subj "/CN=course_16x/O=developers"
```

### Crear el certificado final
```
openssl x509 -req -in course_16.csr -CA \\wsl.localhost\docker-desktop\tmp\docker-desktop-root\run\config\pki\ca.crt -CAkey \\wsl.localhost\docker-desktop\tmp\docker-desktop-root\run\config\pki\ca.key -CAcreateserial -out course_16.crt --days 365
```