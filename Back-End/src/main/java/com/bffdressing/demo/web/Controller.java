package com.bffdressing.demo.web;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bffdressing.demo.dao.ProductRepository;
import com.bffdressing.demo.entities.Product;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api")
public class Controller {
	@Autowired
	private ProductRepository productRepository;

	public Controller(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}
	
	@GetMapping("/products")
	public ResponseEntity<List<Product>> getAllProducts() {
		List<Product> products = this.productRepository.findAll();
		System.out.println("get all products, size:" + products.size());
		return ResponseEntity.ok().body(products);
	}
	
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable Long id) {
		Optional<Product> product = this.productRepository.findById(id);
		
		if(product.isPresent()) {
			return ResponseEntity.ok().body(product.get());
		} else {
			return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/products")
	public ResponseEntity<Product> createProduct(@RequestBody Product product) {
		if(product.getId() != null) {
			return new ResponseEntity<Product>(HttpStatus.BAD_REQUEST);
		}
		
		try {
			product = this.productRepository.save(product);
			return ResponseEntity.ok().body(product);
		} catch (Exception e) {
			return new ResponseEntity<Product>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/products")
	public ResponseEntity<Product> updateProduct(@RequestBody Product product) {
		if(product.getId() == null) {
			return new ResponseEntity<Product>(HttpStatus.BAD_REQUEST);
		}
		
		try {
			product = this.productRepository.save(product);
			return ResponseEntity.ok().body(product);
		} catch (Exception e) {
			return new ResponseEntity<Product>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@DeleteMapping("/products/{id}")
	public ResponseEntity<Product> deleteProductById(@PathVariable Long id) {
		try {
			this.productRepository.deleteById(id);
			return ResponseEntity.noContent().build();
		} catch (Exception e) {
			return new ResponseEntity<Product>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}


