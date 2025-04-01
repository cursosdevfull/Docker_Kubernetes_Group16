# Laravel

### Crear el proyecto
```
docker compose run --rm composer create-project --prefer-dist laravel/laravel .
```

### Migración con artisan
```
docker compose run --rm artisan migrate
```

### Instalación de dependencia para el frontend
```
docker compose run --rm npm install bootstrap
```