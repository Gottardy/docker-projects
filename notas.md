# Verificando el estado de docker
sudo service docker status

# Iniciando la aplicacion de docker
sudo service docker start

# Iniciando la aplicacion de docker
sudo service docker restart

# Corriendo un contenedor MYSQL
sudo docker run --name projectMysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=gabopassword -d mysql

# Corriendo un contenedor MariaDB
sudo docker run --detach --name projectMariadb --env MARIADB_USER=gabopassword --env MARIADB_PASSWORD=gabopassword --env MARIADB_ROOT_PASSWORD=gabopassword  mariadb:latest

# Corriendo un contenedor MongoDB
sudo docker run --rm --name mongodb -p 27017:27017 mongo

# Corriendo un contenedor MongoDB-Express
docker run --name projectMongodb -d mongo:tag

docker run -it --network some-network --rm mongo mongosh --host some-mongo test

docker run --network some-network -e ME_CONFIG_MONGODB_SERVER=some-mongo -p 8081:8081 mongo-express

Environment vairables are passed to the run command for configuring a mongo-express container.

Name                            | Default         | Description
--------------------------------|-----------------|------------
ME_CONFIG_BASICAUTH_USERNAME    | ''              | mongo-express web username
ME_CONFIG_BASICAUTH_PASSWORD    | ''              | mongo-express web password
ME_CONFIG_MONGODB_ENABLE_ADMIN  | 'true'          | Enable admin access to all databases. Send strings: `"true"` or `"false"`
ME_CONFIG_MONGODB_ADMINUSERNAME | ''              | MongoDB admin username
ME_CONFIG_MONGODB_ADMINPASSWORD | ''              | MongoDB admin password
ME_CONFIG_MONGODB_PORT          | 27017           | MongoDB port
ME_CONFIG_MONGODB_SERVER        | 'mongo'         | MongoDB container name. Use comma delimited list of host names for replica sets.
ME_CONFIG_OPTIONS_EDITORTHEME   | 'default'       | mongo-express editor color theme, [more here](http://codemirror.net/demo/theme.html)
ME_CONFIG_REQUEST_SIZE          | '100kb'         | Maximum payload size. CRUD operations above this size will fail in [body-parser](https://www.npmjs.com/package/body-parser).
ME_CONFIG_SITE_BASEURL          | '/'             | Set the baseUrl to ease mounting at a subdirectory. Remember to include a leading and trailing slash.
ME_CONFIG_SITE_COOKIESECRET     | 'cookiesecret'  | String used by [cookie-parser middleware](https://www.npmjs.com/package/cookie-parser) to sign cookies.
ME_CONFIG_SITE_SESSIONSECRET    | 'sessionsecret' | String used to sign the session ID cookie by [express-session middleware](https://www.npmjs.com/package/express-session).
ME_CONFIG_SITE_SSL_ENABLED      | 'false'         | Enable SSL.
ME_CONFIG_SITE_SSL_CRT_PATH     | ''              | SSL certificate file.
ME_CONFIG_SITE_SSL_KEY_PATH     | ''              | SSL key file.


docker run -it --rm \
    --network web_default \
    --name mongo-express \
    -p 8081:8081 \
    -e ME_CONFIG_OPTIONS_EDITORTHEME="ambiance" \
    -e ME_CONFIG_MONGODB_SERVER="web_db_1" \
    -e ME_CONFIG_BASICAUTH_USERNAME="user" \
    -e ME_CONFIG_BASICAUTH_PASSWORD="fairly long password" \
    mongo-express

Este es un ejemplo de comando para ejecutar una imagen de Docker de MongoDB Express.

Aquí están las explicaciones para cada argumento utilizado en el comando:

docker run: comando para ejecutar una imagen de Docker.

-it: especifica que la sesión del contenedor se ejecutará en modo interactivo y asignará una terminal al contenedor.

--rm: especifica que el contenedor se eliminará automáticamente cuando se detenga.

--network web_default: especifica la red Docker a la que se conectará el contenedor.

--name mongo-express: especifica un nombre personalizado para el contenedor.

-p 8081:8081: mapea el puerto 8081 del contenedor al puerto 8081 del host.

-e ME_CONFIG_OPTIONS_EDITORTHEME="ambiance": establece una variable de entorno para MongoDB Express, en este caso, para el tema del editor.

-e ME_CONFIG_MONGODB_SERVER="web_db_1": establece la variable de entorno para MongoDB, en este caso, el servidor de MongoDB que usará MongoDB Express.

-e ME_CONFIG_BASICAUTH_USERNAME="user": establece la variable de entorno para el nombre de usuario de la autenticación básica de MongoDB Express.

-e ME_CONFIG_BASICAUTH_PASSWORD="fairly long password": establece la variable de entorno para la contraseña de la autenticación básica de MongoDB Express.

mongo-express: especifica la imagen de Docker a ejecutar.


# Corriendo un contenedor Python
docker run -it --rm --name python3 python:latest

Este comando inicia un contenedor de Docker a partir de la imagen python:3 y te da acceso a una consola interactiva (-it). También elimina automáticamente el contenedor después de que salgas de la sesión (--rm).

# Corriendo un contenedor MariaDB
docker run -it --rm \
    --name mariadb \
    -e MYSQL_ROOT_PASSWORD=gabopassword \
    -e MYSQL_DATABASE=pruebasMariaDB \
    -p 3306:3306 \
    mariadb:10.11

sudo docker run -it --rm --detach --name mariadb --env MARIADB_USER=gabo --env MARIADB_PASSWORD=gabopassword --env MARIADB_ROOT_PASSWORD=gabopassword --env MARIADB_DATABASE=pruebasMariaDB -p 3306:3306 mariadb:10.11