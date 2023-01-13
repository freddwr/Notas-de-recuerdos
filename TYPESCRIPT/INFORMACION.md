#-> opciones de interface para que el dato pedido no sea obligatorio
interface nombredelinterface {
	nombre: string,
	telefono?: string,
	edad: number

#-> Extension de tipos con interfaces}
interface nombreinterface1 {
	nombre: string,
	telefono: number,
}
interface nombredelinterface2 extends nombreinterface1 {
	edad: number
}

#-> INVESTIGAS MAS SOBRE TIPOS DE DATOS CONDICIONESL CON IF OR ELSE

## ARRAYS

```js

const data = [
		{
			id: 1
			name: 'fredd'
			numeros: [1,2,3,4,5]
		},
		{
			id: 2
			name: 'freddwr
			numeros: [1,6.7.8.9.0]
		}
	]

```

### buscar elemento dentro del id

```js
	data.find(val => val.id === 1)

	/// salida
	{
		id: 1
		name: 'fredd',
		numeros: [1,2,3,4,5]
	},
```

### saber si existe o no el dato

```js
	data.some(val => val.id === 1)

	/// salida
	true/false
```

### saber si existe o no el dato y utilizar el include

```js
	data.some(val => val.numeros.include(2))

	/// salida
	true/false
```

### saber si existe o no el dato y utilizar el include con every verifica si en todo existe dicha palabra o numero

```js
	data.every(val => val.numeros.include(2))

	/// salida
	true/false
```

### una lista de los numeros en un array

```js
	data.reduce((alldata, data) => {
		return [
			...alldata,
			...data.numeros
		]
	})

	/// salida
	[
		1,
		2,
		...
		1.
		6.
		7.
		,,,
	]
```

### una lista de los numeros en un array sin repetidos

```js
	data.reduce((alldata, data) => {
		return Array.from(new Set([
			...alldata,
			...data.numeros
		]))
	})

	/// salida
	[
		1,
		2,
		...
		6.
		7.
		,,,
	]
```
