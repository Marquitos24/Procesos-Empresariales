package es.hito1t2.controladores;


import es.hito1t2.model.Libro;

import es.hito1t2.repositorios.LibroRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin(origins = "*")

  //config.addAllowedHeader("*"); // Permitir todos los encabezados
    //    config.addAllowedMethod("*");
@RequestMapping("/biblioteca")
public class ControladorBiblioteca {

    @Autowired
    private LibroRepository libro;

    @GetMapping("/todos")
    public List<Libro> obtenerTodosLosLibros() {
        return libro.findAll();
    }

    @GetMapping("/{id}")
    public Libro obtenerLibroPorId(@PathVariable("id") int id) {
        return libro.findById(id).orElse(null);
    }

    @PostMapping("/nuevo")
    public Libro crearNuevoLibro(@RequestBody Libro nuevoLibro) {
        libro.save(nuevoLibro);
        return nuevoLibro;
    }

    @PutMapping("/modificar/{id}")
    public Libro modificarLibro(@RequestBody Libro libroModificado, @PathVariable("id") int id) {
        libroModificado.setId(id);
        libro.save(libroModificado);
        return libroModificado;
    }

    @DeleteMapping("/eliminar/{id}")
    public String eliminarLibro(@PathVariable("id") int id) {
        libro.deleteById(id);
        return "Libro con ID " + id + " eliminado";
    }
}
