package es.hito1t2.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Libro implements Serializable {
    @Column(name = "ID_libro")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String titulo;
    private String autor;
    private String editorial;
    private String genero;
    @Column(name = "año_publi")
    private int añoPubli;

    private Boolean disponible;

    public Libro() {}

    public Libro(int id, String titulo, String autor, String editorial, String genero, int añoPubli, Boolean disponible) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
        this.añoPubli = añoPubli;
        this.disponible = disponible;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getEditorial() {
        return editorial;
    }

    public void setEditorial(String editorial) {
        this.editorial = editorial;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public int getAñoPubli() {
        return añoPubli;
    }

    public void setAñoPubli(int añoPubli) {
        this.añoPubli = añoPubli;
    }

    public Boolean getDisponible() {
        return disponible;
    }

    public void setDisponible(Boolean disponible) {
        this.disponible = disponible;
    }
}
