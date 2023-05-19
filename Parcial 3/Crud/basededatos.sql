create database programacionweb;

use programacionweb;

CREATE TABLE generos (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO generos (nombre, descripcion) VALUES ('Rock', 'Género musical que se caracteriza por el uso de guitarras eléctricas y batería.');

INSERT INTO generos (nombre, descripcion) VALUES ('Reggaeton', 'Género musical de origen latinoamericano que combina la música electrónica, el hip hop y el reggae.');


use programacionweb;
INSERT INTO //TABLE

INSERT INTO generos (id, nombre, descripcion, popularidad, fecha_creacion, ultima_modificacion) 
VALUES (1, 'Rock', 'Género musical que se caracteriza por el uso de guitarras eléctricas y batería.', 8, '1950-01-01', NOW());

INSERT INTO generos (id, nombre, descripcion, popularidad, fecha_creacion, ultima_modificacion) 
VALUES (2, 'Reggaeton', 'Género musical de origen latinoamericano que combina la música electrónica, el hip hop y el reggae.', 9, '1990-01-01', NOW());

INSERT INTO generos (id, nombre, descripcion, popularidad, fecha_creacion, ultima_modificacion) 
VALUES (3, 'Pop', 'Género musical que se caracteriza por ser comercial y accesible a un público amplio.', 7, '1950-01-01', NOW());

INSERT INTO generos (id, nombre, descripcion, popularidad, fecha_creacion, ultima_modificacion) 
VALUES (4, 'Hip hop', 'Género musical que se caracteriza por el rap y el uso de loops y samples.', 8, '1970-01-01', NOW());

INSERT INTO generos (id, nombre, descripcion, popularidad, fecha_creacion, ultima_modificacion) 
VALUES (5, 'Jazz', 'Género musical que se caracteriza por la improvisación y el swing.', 6, '1910-01-01', NOW());
