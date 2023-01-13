# NO USAR SWITCH OR IF

```js
	function nombrefuncion (valor){
		swtch(valor){
			case 'val1':
				return 'retorna  val1'
			case 'val2':
				return 'retorna  val2'
			default: return 'retorna valor'
		}
	}

	function nombrefuncion (valor){
		if (valor === 'val1'):
			return 'retorna  val1'
		if (valor === 'val2'):
			return 'retorna  val2'

		return 'retorna valor'
	}
```

# USAR OBJECTOS SOLUCION FACTIBLE

```js
	function nombrefuncion (valor){
		const defaultData = 'val2' /** asigna un valor por defecto al cual existe */

		const data = {
			val1: 'retorna val1',
			val2: 'retorna val2',
		}

		return data[valor] ?? data[defaultData]
	}
```
