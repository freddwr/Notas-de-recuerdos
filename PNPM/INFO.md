
# INIT CON PNPM

```terminal
	>corepack enable
```

#### instalar la ultima version pnpm

```terminal
	>corepack prepare pnpm@latest --activate
```

#### Para iniciar un proyecto

```terminal
	>pnpm init
```

#### Para add dep and devdep

```terminal
	>pnpm add -D ts-node-dev @types/node
```

```terminal
	>pnpm add express mongose nodemon typescript
```

#### Para add dependencias de manera global

```terminal
	>pnpm add @angular/cli -g
```

#### para evitar errores al add dep de manera global

```terminal
	>pnpm setup
```

#### instalar node_modules

```terminal
	>pnpm i/install
```

#### Para ejecutar dentro de node modules como npx

```terminal
	>pnpm exec tsc --init
```

#### Para ejecutar sin necesidad de instalar global

> npx create-react-app
> la alternativa a es
```terminal
	>pnpm dlx create-react-app
```

#### crear un proyecto con vite para mas velocidad

```terminal
	>pnpm create vite
```

