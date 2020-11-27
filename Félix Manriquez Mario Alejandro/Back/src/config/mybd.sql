create database Examen;
use Examen;
create table Libros (
id INT NOT NULL auto_increment,
titulo varchar(80) NOT NULL,
autor varchar(100) NOT NULL,
numPagina varchar (4),
añoPublicacion varchar (4),
primary key(id)
);

drop table Libros;

insert into Libros(titulo, autor, numPagina, añoPublicacion) values ("100 años de soledad", "Gabriel Garcia Marquez", "471", "1967");
insert into Libros(titulo, autor, numPagina, añoPublicacion) values ("The Hunger Games", "Suzanne Collins", "471", "374");
select * from Libros;