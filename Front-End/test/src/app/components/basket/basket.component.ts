import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/model';
import { BasketService } from '../../services/basket.service';
import  { CommandeService} from '../../services/commande.service'


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: any = {};
  // message: string = '';
  isOk = false;

  constructor( private basketService: BasketService, private commandeService: CommandeService) { }


  ngOnInit(): void {

    this.basket = this.basketService.getBasket();
  }

  removeProductFromBasket(product: any){
    this.basketService.removeProduct(product)
  }

  addcommande(commandeForm: any){
    
    const commande  = { basket: this.basket, client: commandeForm.value};
    console.log(commande);

    this.commandeService.addCommande(commande).subscribe(data => {
      commandeForm = null;
      this.basketService.removeBasket();

      // this.message = "votre commande est confirmee";
      // this.isOk = true;

    // }, error => {

    });

  }

}
