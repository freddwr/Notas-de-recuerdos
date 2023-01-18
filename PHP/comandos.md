# BASES DE PHP

> https://www.php.net/manual/es/indexes.examples.php

## OPERADOR NULO
```php
	<?php
	// Obntener el valor de $_GET['usuario'] y devolver 'nadie'
	// si no existe.
	$nombre_usuario = $_GET['usuario'] ?? 'nadie';
	// Esto equivale a:
	$nombre_usuario = isset($_GET['usuario']) ? $_GET['usuario'] : 'nadie';

	// La fusión se puede encadenar: esto devolverá el primer
	// valor definido de $_GET['usuario'], $_POST['usuario'],
	// y 'nadie'.
	$nombre_usuario = $_GET['usuario'] ?? $_POST['usuario'] ?? 'nadie';
	?>
```

```php
	<?php
		// "||" has a greater precedence than "or"
		$e = false || true; // $e will be assigned to (false || true) which is true
		$f = false or true; // $f will be assigned to false
		var_dump($e, $f);

		// "&&" has a greater precedence than "and"
		$g = true && false; // $g will be assigned to (true && false) which is false
		$h = true and false; // $h will be assigned to true
		var_dump($g, $h);
	?>
```

## OPERADOR NAVE ESPACIAL
```php
		// Números enteros
		echo 1 <=> 1; // 0
		echo 1 <=> 2; // -1
		echo 2 <=> 1; // 1

		// Numeros decimales
		echo 1.5 <=> 1.5; // 0
		echo 1.5 <=> 2.5; // -1
		echo 2.5 <=> 1.5; // 1

		// Cadenas de caracteres
		echo "a" <=> "a"; // 0
		echo "a" <=> "b"; // -1
		echo "b" <=> "a"; // 1
	?>
```

## DECLARACION DE USE EN GRUPO
```php
		// Código anterior a PHP 7
		use un\espacioDeNombres\ClaseA;
		use un\espacioDeNombres\ClaseB;
		use un\espacioDeNombres\ClaseC as C;

		use function un\espacioDeNombres\fn_a;
		use function un\espacioDeNombres\fn_b;
		use function un\espacioDeNombres\fn_c;

		use const un\espacioDeNombres\ConstA;
		use const un\espacioDeNombres\ConstB;
		use const un\espacioDeNombres\ConstC;

		// código de PHP 7+
		use un\espacioDeNombres\{ClaseA, ClaseB, ClaseC as C};
		use function un\espacioDeNombres\{fn_a, fn_b, fn_c};
		use const un\espacioDeNombres\{ConstA, ConstB, ConstC};
	?>
```

