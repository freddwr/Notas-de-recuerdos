
# CREACION DE UN CONTENEDOR BASADO EN UNA IMAGEN
docker run --rm --name nombredelcontenedor -p 8080:80 -v $(pwd)/web:/usr/share/nginx/html nginx
