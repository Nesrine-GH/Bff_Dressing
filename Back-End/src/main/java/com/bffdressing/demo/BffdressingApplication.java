package com.bffdressing.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.bffdressing.demo.dao.ProductRepository;
import com.bffdressing.demo.entities.Categorie;
import com.bffdressing.demo.entities.Product;



@SpringBootApplication
public class BffdressingApplication implements CommandLineRunner {
	
	@Autowired
	private RepositoryRestConfiguration repositoryRestConfiguration;
	
	@Autowired
	private ProductRepository productRepository;
	

	
	public static void main(String[] args) {
		SpringApplication.run(BffdressingApplication.class, args);
	}	
	
	@Override
	public void run(String... args) throws Exception {
		repositoryRestConfiguration.exposeIdsFor(Product.class,Categorie.class);
	}
	
	 
	
}