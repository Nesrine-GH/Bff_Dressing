package com.bffdressing.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;



@Entity
public class Product {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	
	private Long id;
	private String nom;
	@Column(length=1000)
	private String photo;
	@Column(length=1000)
	private String descprition;
	private Long taille;
	private double prix;
	private int nbrstock;
	
	@ManyToOne
	private Categorie categorie;

	public Product(Long id, String nom, String photo, String descprition, Long taille, double prix, int nbrstock,
			Categorie categorie) {
		super();
		this.id = id;
		this.nom = nom;
		this.photo = photo;
		this.descprition = descprition;
		this.taille = taille;
		this.prix = prix;
		this.nbrstock = nbrstock;
		this.categorie = categorie;
	}

	public Product() {
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

	public String getDescprition() {
		return descprition;
	}

	public void setDescprition(String descprition) {
		this.descprition = descprition;
	}

	public Long getTaille() {
		return taille;
	}

	public void setTaille(Long taille) {
		this.taille = taille;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	public int getNbrstock() {
		return nbrstock;
	}

	public void setNbrstock(int nbrstock) {
		this.nbrstock = nbrstock;
	}

	public Categorie getCategorie() {
		return categorie;
	}

	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
	}
	
	
	
	
	
	
}

	