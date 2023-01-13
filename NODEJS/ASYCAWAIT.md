# PROMISES AND ASYC AWAIT

### Ejemplo con codigo

#### sincrono cuando el codigo continua la ejecucion linea a linea sin detenerse
```js
	const datos = [
		{ id: 0, nombre: 'nombre1' }
		{ id: 1, nombre: 'nombre2' }
	]
	const GetDatos = () => {
		console.log(datos)
	}
```

#### asincrono cuando el codigo debe hacer una peticion y debe esperar a que se resuelva
##### en nodejs v18 no es necesario envolver en una funcion async, ya viene por defecto

```js
	const GetDatos = async () => {
		const data = 0
		const val = await fetch(url) // espera milesegundos para luego continuar
		console.log(data)
		console.log(val)
	}
```
