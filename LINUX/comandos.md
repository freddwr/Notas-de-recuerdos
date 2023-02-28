## CAMBIAR EXTENSION DE ARCHIVOS
```bash
	for file in ./**/*.txt; do # -> Buscara en todas las carpetas y subcarpetas con la extension .txt
		mv -- "$file" "${file%.txt}.js" # -> cambia la extension con mv(mover --) de .txt a .js
	done # -> finalizar for
```
> for file in ./**/*.txt; do
> done -> finaliza

> done -> finaliza
