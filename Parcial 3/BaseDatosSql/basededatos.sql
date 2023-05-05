create database programacionweb;

use programacionweb;

CREATE TABLE generos (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO generos (nombre, descripcion) VALUES ('Rock', 'Género musical que se caracteriza por el uso de guitarras eléctricas y batería.');
