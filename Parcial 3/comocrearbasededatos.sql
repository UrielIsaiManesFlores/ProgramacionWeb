-- create database ejemplo;

use programacionweb;

-- create table empleado
-- ( idEmpleado smallint not null auto_increment,
--   nombre     varchar(30),
--   apPaterno  varchar(30),
--   apMaterno  varchar(30),
--   edad       int,
--   sueldo     decimal(9,2),
--   PRIMARY KEY(idEmpleado)
-- );
CREATE TABLE generos (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255),
    PRIMARY KEY (id)
);


INSERT INTO generos (nombre, descripcion) VALUES ('Rock', 'Género musical que se caracteriza por el uso de guitarras eléctricas y batería.');

-- insert into empleado (nombre,apPaterno,apMaterno,edad,sueldo)
-- values ('Gerardo','Pineda','Zapata',50,1500);

-- insert into empleado (nombre,apPaterno,apMaterno,edad,sueldo)
-- values ('Adolfo','Perez','Gutierrez',45,1000);

-- insert into empleado (nombre,apPaterno,apMaterno,edad,sueldo)
-- values ('Fernanda','Alcala','Sanchez',18,2000);

select * from generos;