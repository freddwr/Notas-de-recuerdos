
# DARLE PRIVILEGIOS A UN USUARIO

```sql

-- VER MAS SOBRE ESTAS 3 LINEAS PARA DAR PRIVILEGIOS
-- CREATE USER yourusercbot WITH ENCRYPTED PASSWORD '+QshzrZi}B8a+QshzrZi}B8a+QshzrZi}B8a';
-- CREATE USER youruser WITH ENCRYPTED PASSWORD 'yourpass';
-- GRANT pg_read_all_data TO hostscp_cbot;


GRANT CONNECT ON DATABASE chambi93tx_dbchambitex TO chambi93tx_userdb;

GRANT ALL PRIVILEGES ON DATABASE chambi93tx_dbchambitex TO chambi93tx_userdb;

GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO chambi93tx_userdb;

GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO chambi93tx_userdb;

```

### LOWER STRING

```sql
	SELECT
		concat_ws (
			', ',
			LOWER (last_name),
			LOWER (first_name)
		) as name
	FROM
		customer
	ORDER BY last_name;

	> salida => toda la cadena dentro de contact sera minusculas
```

### UPPER STRING

```sql
	SELECT
		CONCAT (
			UPPER (first_name),
			UPPER (last_name)
		) as full_name
	FROM
		staff;

	> salida => toda la cadena dentro de contact sera mayusculas
```

### UPPER STRING

```sql
	SELECT
		INITCAP(
			CONCAT (first_name, ' ', last_name)
		) AS full_name
	FROM
		customer
	ORDER BY
		first_name;

	> salida => toda la cadena dentro de contact sera 'Palabra Nueva' la primera letra de cada palabra en mayusculas
```

### ADD COLUMN EN UNA TABLA

```sql
	ALTER TABLE nombretabla ADD COLUMN nombrecolumna varchar(200) default null;
```
