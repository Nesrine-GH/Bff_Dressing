package com.bffdressing.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.bffdressing.demo.entities.Categorie;

@CrossOrigin("*")
@RestController
public interface CategorieRepository extends JpaRepository<Categorie, Long> {

}
