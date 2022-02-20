package com.bffdressing.demo.entities;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;



@Entity
public class Categorie {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	
	private Long id;
	private String nom;
	@Column(length=1000)
	private String photo;
	@OneToMany (mappedBy = "categorie")
	private Collection<Product> Product;
	
	
	public Categorie(Long id, String nom, String photo, Collection<com.bffdressing.demo.entities.Product> product) {
		super();
		this.id = id;
		this.nom = nom;
		this.photo = photo;
		Product = product;
	}


	public Categorie() {
		super();
		
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	public String getPhoto() {
		return photo;
	}


	public void setPhoto(String photo) {
		this.photo = photo;
	}


	public Collection<Product> getProduct() {
		return Product;
	}


	public void setProduct(Collection<Product> product) {
		Product = product;
	}

	
	
	
	
	
	
	
}
