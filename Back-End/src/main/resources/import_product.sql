CREATE TABLE PRODUCT (
    id INT PRIMARY KEY NOT NULL,
    nom VARCHAR(100),
    categorie VARCHAR(100),
    photo VARCHAR(255),
    date_naissance DATE,
    descprition VARCHAR(255),
    taille INT,
    prix DOUBLE,
    nbrstock INT
)
