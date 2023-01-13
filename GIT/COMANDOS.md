# GIT COMANDS

### ayuda a saber mas de cada comando
```terminal
	> git blame/log/? --help
```

### iniciar con git y add remote
```terminal
	> git init
	> git remote add origin urlrepositorio
	> git remote
	> git remote -v
```

### actualizar repositorio con el local pero sucede dos pasos
#### realiza un git fetch -> trae al local pero no copia en los files
#### realiza un git merge -> para fucionar los cambio con el local
```terminal
	> git pull
	> git pull origin master --allow-unrelated-hitories -> alternativa a la fusion  con files
```

### subit modificaciones
#### git add . punto para agregar todos los cambio puede reemplazar a solo un archivo o ruta del archivo
```terminal
	> git add .
	> git commit -m "[freddwr] [ 01 01 2020 10:10] modificacion"
	> git commit --amend # -> significa remendar | hace q puedas agregar mas archivos modificados con el comit anterior sin necesidad de un nuevo commit
	> git commit --amend --no-edit  # -> hace q puedas agregar mas archivos modificados con el comit anterior sin necesidad de un nuevo commit ni comentarios
	> git push -u origin master
```

### mostrar logs de commits para cada coloborador
```terminal
	> git shortlog
	> git shortlog -sn
	> git shortlog -sn --all
	> git shortlog -sn --all --no-merge
```

### mostrar logs por archivo quien modifico
```terminal
	> git blame file
	> git blame -c file
	> git blame -c file -L20,50 #-> muestra solo las lineas desde el 20 hasta el 50 quien modifico
```

### mostrar todos los cambio hechos en el anterior commit
```terminal
	> git show
	> git log
	> git log --all
	> alias arbolito="git log --all --graph --decorate --online" # -> solo linux
	> arbolito # -> la ejecucion sera el comando dentro de comillas
	> git log --all --graph --decorate --online
	> git log --stat -> Muestra los cambios especificos en los archivos
	> git log --name-only -> logs con cambios de cmodificacion
```

### comparar los cambios de un archivo con los ids al mostrar git log de un archivo
### git diff idversionantigua espacio idversionreciente para ver los cambio correctos
```terminal
	> git diff 90de35a5113b3890088011bef4e17826336e9324 15115fbd6e0e9e2d4e5a7b9e83736f9699823feb
```

### volver a la version anterior de manera completa sin guardar
```terminal
	> git reset iddelcommit --hard
```

### volver a la version anterior de manera completa pero mantiene los cambios que hiciste en git add sin borrarlos
```terminal
	> git reset iddelcommit --sorf
```

### paraceido a git log pero tiene mas opciones y no piende nada aunque borraran la rama | todo permanece
```terminal
	> git reflog
	> git reset HEAD@{0} # -> vuelve al idcommit no es bueno
	> git reset --hard iddelcommit # -> mejor volver al iddelcomit donde todo esta bien
```

### volver a la version anterior de un archivo con el iddelcommit y retornar al actual
```terminal
	> git checkout iddelcommit file
	> git checkout master file
```

## crear una rama nueva junto al master
```terminal
	> git branch nuevarama
```

### para movernos entre ramas y el segundo para ir directamente
```terminal
	> git checkout nombredelanuevarama
	> git checkout -b nombredelanuevarama
```

### ver en cual rama estas trabajando o ver listado
```terminal
	> git branch
```

### ver rama ver listado en remoto
```terminal
	> git branch -r
```

### ver rama del local y remoto
```terminal
	> git branch -a
```

### ver ramas q existen y su historia
```terminal
	> git show-branch --all
```

### No realizar en github mala practica pero util en el local es como el merge pero esto elimina la rama secundaria y solo queda uno
```terminal
	> git rebase nombredelarama # -> se debe estar en la rama al cual cambiara
	> git rebase master #-> dos veces, lo de arriba es el cambio y aca es el final donde este no se borrara
```

### para realizar un merge (unir dos ramas) se debe poner en la rama a la quequieres q sea el principal,
#### si quieres de la nuevarama sea la principal se debe colocar en la nuevarama con un git checkout nuevarama y luego ejecutar git merge lo que traera los cambios de master a nuevarama
```terminal
	> git merge mater
```

## Agregar Versiones al Proyecto con tag de git
```terminal
	> git tag -a v0.1 -m "aca un mensaje de para este tab" iddelcommit/idreducidode-arbolito # -> v0.1 => nombre dela tag
```

### Listar tag
```terminal
	> git tag
	> git show-ref --tags
```

### Enviar tag al repositorio de GITHUB
```terminal
	> git push origin --tags
```

### Eliminar tag de local al repositorio de GITHUB
```terminal
	> git tag -d nombredelatag
	> git push origin :refs/tags/nombredelatag
```

### Retornar a un iddelcomint anterior temporalmente  pero sin realizar comit para poder ver loque estaba
```terminal
	> git stash # -> debes estar en la rama donde cambiaras y retornas ese cambio, en otro caso habra problemas si estas en otra rama
	> git stash list # -> se ve lo que temporalmente esta guardado sin comit
	> git stash drop # -> borra lo que esta guardado temporalmente
	> git stash pop # -> se debe estar en la rama donde cambiaste, este comando es para retornar en donde estudiste con los cambios sin commit

	> git stash branch nombredelarama # -> esto hace que puedas crear una rama con los cambios del temporal
```

### forma de borrar archivos repetidos y no carpetas
```terminal
	> git clean --dry-run # -> lista los archivos que borrara
	> git clean -f # -> borrar los archivos dentro del proyecto y no carpetas duplicados | si hay una extension en gitignore como .jpg esto tomara en cuenta para no ser borrado porq no es parte del proyecto
```

### unir o agregar un commit de otra rama (iddelarama puede ser cualquiera) para agregarlo a la rama principal
```terminal
	> git cherry-pick iddeotrarama
```

### Buscar dentro del proyecto palabras clave con git
```terminal
	> git grep -n palabraabuscar
```

### Buscar y contar cuantas veces se repite la palabra
```terminal
	> git grep -c palabraabuscar
	> git grep -c "etiquetahtml"
```

### Buscar la palabra dentro del log
```terminal
	> git log -S "palabraabuscar"
```

### log pero a un archivo con detalle del usuario quien modifico
```terminal
	> git blame nombredelfile
```
