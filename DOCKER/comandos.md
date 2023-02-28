### ->0 VER EL LOG DE DOCKER Y QUEDANDO EN VISTA
> docker logs --follow nombredelcontenedor

### ->1 CREA UN CONTENEDOR DE DOCKER CON UNA TERMINAL INTERACTIVA
### -> CUAND SALE DEL CONT BORRALO CON NOMBRE Y USA LA IMAGEN Y AL FINAL EJECUTA LA TERMINAL

run -> create un nuevo contenedor
it -> interactive terminal
rm -> cuando sale del contenedor lo borrara, se usa solamente para pruebas
name -> nombre del contenedor

> docker run -it --rm --name nombredelcontenedor debian:11 bash

## ->2 puede ingresar con otra terminal o si esta activo
> docker exec -it nombredelcontenedor bash

## ->2.1 borrar contenedores
> docker rm -f nombredelcontenedor

## ->3 esto lista los contenedores y sin '-a' solo los activos
> docker container ls -a
> docker ps ## -> solo muestra los que estan ejecutandose

## ->4 borra el contenedor con el nombre o id
> docker container rm nombredelcontenedor

## ->5 pueder ver los archivos de diferencia en base a la imagen al contenedor vacio
> docker diff nombredelcontenedor

## ->6 copia de archivos local a un contenedor
> docker cp archivo nombredelcontenedor:/home/ruta

## ->7 copia de archivos del contenedor al local
> docker cp nombredelcontenedor:/home/ruta ./rutalocal

## ->8 copia todos los archivos del contenedor todo
> docker export nombredelcontenedor -o nombre.rar/zip/tar tar->descomprimir tar -xvf nombre

## ->9 inicia y detiene el contenedor
> docker create --name nombredelcontenedor debian:11 bash ## -> alternativa para crear pero el run lo reesplaza
> docker start/stop/pause/restart nombredelcontenedor

## ->10 lista las imagenes descargadas = no exagerar
> docker images

## ->11 borrar imagen o iso
> docker image rm nombrerepositorytag
> docker rmi nombrerepositorytag

## ->12 CTOP Y STAST se utiliza para saber el rendimiento parecido a HTOP
> docker stast
> ctop

## ->12 solo para descargar la imagen iso
> docker pull nombrerepoiso


#####################################################################
## -> CREAR RED DENTRO DE DOCKER Y LISTAR
> docker network ls
> docker network create nombredelared
> docker network rm nombredelared

## -> ENLAZAR REDES EN DOCKER
> docker create -p 27017:27017 --name monguito --network mired -e MONGO_INITDB_ROOT_USERNAME=nombre -e MONGO_INITDB_ROOT_PASSWORD=password mongo
> docker create -p 3000:3000 --name appname --network mired miapp:1

#####################################################################
## ->01 CREAR UN NUEVO CONTENDOR Y HACE QUE EL PUERTO REDIRECCIONE DENTRO 8080 local y 80 dentro
## -> CONOCIDO COMO MAPEO DE PUERTOS
> docker run --name nombredelcontenedor -p 8080:80 nginx:1.21.6

## ->02 comparte la campeta al contenedor ejmp crear un index.html en local y esto lo desplegara en nginx
> docker run --name nombredelcontenedor -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx:1.21.6

## -> para ingresar con otra terminal y ver lo que compartiras en dentro del contenedor
> docker run --rm --name nombredelcontenedor -p 8080:80 -v $(pwd)/folder:/home/folder nginx
> docker exec -it nombredelcontenedor bash

#####################################################################
DOCKER COMPOSE ## -> es para multiples contenedores en una sola ver mas sobre esto

## -> para crear mas instancias de una applicacion
docker compose up -d --scale=2 ## -> son instancias

## -> asignacion de memoria
docker run -d --name nombredelcontenedor --memory 1g imagenautilizar


#####################################################################
## -> utilizando docker ahora con los comando
> docker compose up/down
> docker compose start/stop
> docker ps -a
> docker network ls
> docker network inspect nombredelared
> docker logs nombredelcontenedor

# para ver los recursos que utiliza cada contenedor IMPORTANTE
> docker stats

# para remover o eliminar contenedores todos
> docker container prune

# para remover o eliminar todo imagenes y contenedores
> docker system prune -a


On Alpine Linux systems:
# docker exec -it NGINX_container_ID sh
On Debian systems:

# docker exec -it NGINX_container_ID bash


> Si desea eliminar TODO su caché, primero debe asegurarse de que todos los contenedores estén detenidos y eliminados, ya que no puede eliminar una imagen en uso por un contenedor. pues algo parecido

docker kill $(docker ps -q)
docker_clean_ps
docker rmi $(docker images -a -q)
