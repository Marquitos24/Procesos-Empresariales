CREATE DATABASE Biblioteca;
USE Biblioteca;

CREATE TABLE libro (
    ID_libro INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(200) NOT NULL,
    Autor VARCHAR(100) NOT NULL,
    Editorial VARCHAR(100),
    Genero VARCHAR(200), 
    AñoPubli INT,
    Disponible BOOLEAN
);

select * from libro;
CREATE TABLE usuario (
    ID_usuario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(200),
    Apellidos VARCHAR(200),
    Direccion VARCHAR(200),
    CorreoElec VARCHAR(200)
);
drop table usuario;

CREATE TABLE transacciones (
    ID_transaccion INT AUTO_INCREMENT PRIMARY KEY,
    ID_libro INT,
    FOREIGN KEY (ID_libro) REFERENCES libro(ID_libro)
);

CREATE TABLE alquilar (
    ID_Alquilado INT AUTO_INCREMENT PRIMARY KEY,
    ID_libro INT,
    FOREIGN KEY (ID_libro) REFERENCES libro(ID_libro)
);

CREATE TABLE registrar (
    ID_Registro INT AUTO_INCREMENT PRIMARY KEY,
    ID_Transaccion INT,
    FOREIGN KEY (ID_Transaccion) REFERENCES transacciones(ID_transaccion)
);

-- Insertar los libros
INSERT INTO libro (Titulo, Autor, Editorial, Genero, AñoPubli, Disponible)
VALUES ('El nombre del viento', 'Patrick Rothfuss', 'DAW Books', 'Fantasía', 2007, true),
       ('El temor de un hombre sabio', 'Patrick Rothfuss', 'DAW Books', 'Fantasía', 2011, true),
       ('El Imperio Final', 'Brandon Sanderson', 'Tor Books', 'Fantasía', 2006, true),
       ('El pozo de la ascensión', 'Brandon Sanderson', 'Tor Books', 'Fantasía', 2007, true),
       ('El héroe de las eras', 'Brandon Sanderson', 'Tor Books', 'Fantasía', 2008, true),
       ('Rebelión en la Bounty', 'John Boyne', 'C.S. Forester', 'Histórica', 1932, true),
       ('Cien años de soledad', 'Gabriel García Márquez', 'Editorial Sudamericana', 'Realismo mágico', 1967, true),
       ('El señor de los anillos: La comunidad del anillo', 'J.R.R. Tolkien', 'Allen & Unwin', 'Fantasía', 1954, true),
       ('1984', 'George Orwell', 'Secker & Warburg', 'Ciencia ficción', 1949, true),
       ('Matar a un ruiseñor', 'Harper Lee', 'J.B. Lippincott & Co.', 'Novela', 1960, true),
       ('Harry Potter y la piedra filosofal', 'J.K. Rowling', 'Bloomsbury Publishing', 'Fantasía', 1997, true),
       ('Orgullo y prejuicio', 'Jane Austen', 'T. Egerton, Whitehall', 'Novela romántica', 1813, true),
       ('La sombra del viento', 'Carlos Ruiz Zafón', 'Planeta', 'Misterio', 2001, true),
       ('Crónica de una muerte anunciada', 'Gabriel García Márquez', 'Editorial Sudamericana', 'Novela', 1981, true),
       ('El alquimista', 'Paulo Coelho', 'HarperCollins', 'Ficción', 1988, true),
       ('El principito', 'Antoine de Saint-Exupéry', 'Reynal & Hitchcock', 'Literatura infantil', 1943, true),
       ('El código Da Vinci', 'Dan Brown', 'Doubleday', 'Ficción de misterio', 2003, true),
       ('Crimen y castigo', 'Fyodor Dostoevsky', 'The Russian Messenger', 'Novela psicológica', 1866, true),
       ('La ciudad y los perros', 'Mario Vargas Llosa', 'Seix Barral', 'Novela', 1963, true),
       ('Don Quijote de la Mancha', 'Miguel de Cervantes', 'Juan de la Cuesta', 'Novela satírica', 1605, true);

ALTER TABLE libro CHANGE AñoPubli año_publi INT;
