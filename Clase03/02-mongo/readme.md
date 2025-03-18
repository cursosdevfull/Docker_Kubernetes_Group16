# MongoDB

```
docker run --name server-mongo -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=12345 -d mongo
```

### Cliente
```
docker run --name client-mongo -d -e ME_CONFIG_BASICAUTH_USERNAME=admin -e ME_CONFIG_BASICAUTH_PASSWORD=12345 -e ME_CONFIG_MONGODB_SERVER=172.17.0.4 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=12345 -p  9000:8081 mongo-express
```

mongodb
27017

client: mongo-express
80