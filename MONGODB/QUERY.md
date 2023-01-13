
# MONGODB

### datos curiosos
## base de datos
### ->

## collections
### -> las colecciones son las tablas en mongodb eje: users, productos

## documents
### -> son los datos dentro de cada tabla (collections), los datos son guardados en formato json({"name", "fredd"})

## conexion con la terminal
```mongodb
	> mongo ip(localhost/192.168.0.1):27017
```

## db q usamos actualmente
```mongodb
	> db
	> db.help() #-> para ayuda
```

## listar base de datos
```mongodb
	> show dbs
```

## crear db
```mongodb
	> use nombredelabase
```

## eliminar db pero se debe estar usando la base actual para eliminar
```mongodb
	> db.dropDatabase()
```

## listar tablas
```mongodb
	> show collections
```

## crear tablas
```mongodb
	> db.createCollection("nombredelatabla")
```

## eliminar tablas
```mongodb
	> db.nombredelatabla.drop()
```

## insertar datos
```mongodb
	> db.nombredelatabla.insert({"name":"fredd"})
	> db.nombredelatabla.insert([{"name":"fredd"},{"name":"fredd"}])
```

## actualiza datos
```mongodb
	> db.nombredelatabla.update({"name":"fredd"}, {"campo":"valor"}) #-> el 2do arg reemplaza todos los valores dentro
	> db.nombredelatabla.update({"name":"fredd"}, {$set: {"campo":"valor"}}) #-> para crear nuevo campo
	> db.nombredelatabla.update({"name":"fredd"}, {$set: {"campo":"valor"}}, {upsert:true}) #-> funciona como insert

	> db.nombredelatabla.update({"name":"fredd"}, {$inc: {"campo":10}}) #-> metodo incremente

	> db.nombredelatabla.update({"name":"fredd"}, {$rename: {"name":"columna"}}) #-> modificar una propiedad de name => columna
```

## eliminar datos
```mongodb
	> db.nombredelatabla.remove({"name":"fredd"})
```

## ver datos o buscar dentro de un tabla
```mongodb
	> db.nombredelatabla.find().count()
	> db.nombredelatabla.find()
	> db.nombredelatabla.find().pretty()
	> db.nombredelatabla.find({"name": "laptop})
	> db.nombredelatabla.find().limit(2)
	> db.nombredelatabla.findOne()
	> db.nombredelatabla.findOne({"name": "laptop}) # -> solo muestra el primer dato el cual solo tenga en el campo name=>latop
	> db.nombredelatabla.find({"name": "laptop}, {"name":1,"_id":0}) # -> lo mismo de arriba pero sin el id solo muestra el nombre
	> db.nombredelatabla.find({"name": "laptop}, {"name":1,"_id":0}).sort({"name":1}) # -> lo mismo de arriba pero en orden

	> db.nombredelatabla.find().forEach(data => print("texto => " + data.nombredelcampo))
```
