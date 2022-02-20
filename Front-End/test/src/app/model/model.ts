export class Product {
    constructor(
        public id: number,
        public categorie: String,
        public nom: String,
        public photo: String,
        public descprition: String,
        public taille: number,
        public prix: number,
        public nbrstock: number,
        public quantite: number


    ) {

    }
}
export class BasketProduct {
    constructor(
        public id: number,
        public product: Product,
        public qt: number,
        public total: number
    ){}
}

export class Basket {
    constructor(
        
        public products: BasketProduct[],
        public total: number
    ){}
    }
export class User {
    constructor(
        public username: string,
        public password: string,
        public roles: string[]
    ) { }
}
