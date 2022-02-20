package com.bffdressing.demo.dao;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.bffdressing.demo.entities.Product;

@CrossOrigin("*")
@RestController
public interface ProductRepository extends JpaRepository<Product, Long>{

	

	@RestResource(path="byprix")
	public List<Product> findByprixBetween(@Param("minprix") double minprix,@Param("maxprix") double maxprix);
}
