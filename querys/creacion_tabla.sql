create table productos(
	id serial primary key,
	titulo varchar(255) not null,
	descripcion text not null,
	precio integer not null,
	categoria varchar(255) not null,
	ruta text not null
);

drop table productos;
