## INGRESAR A UNA BASE DE DATOS CON PSQL

```terminal
	> psql nombredelabasededatos nombredeusuario
```

## RESTAURAR BASE DE DATOS DESDE LA TERMINAL Y PSQL

```terminal
	> \i 'rutacompletadelarchivo.sql'
```

#### Para listar bases de datos

```terminal
 	> \l
```

#### Crear base de datos
##### no olvidar en punto y coma para ejecutar sql

```terminal
 	> CREATE DATABASE nombrebase;
```

#### Eliminar base de datos
##### no olvidar en punto y coma para ejecutar sql

```terminal
 	> BROP DATABASE nombrebase;
```

#### Cambiar base de datos dentro de la terminal

```terminal
 	> \c nombredelabase
```

#### Muestra las tablas de la base de datos

```terminal
 	> \d
```

#### Muestra las tablas de la base de datos y tambien puede ser listar las columnas de dicha tabla

```terminal
 	> \d nombredelatabla
```
