package es.hito1t2.repositorios;

import es.hito1t2.model.Libro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibroRepository  extends JpaRepository<Libro, Integer> {


}
