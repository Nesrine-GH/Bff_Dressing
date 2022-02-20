import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
erreur=0;
  // var: any;
  // User = {
  //   "prenom": '',
  //   "motdepasse": ''
  // }
  constructor(public authentificationService: AuthentificationService, private router: Router)
   { this.user = new User("", "", []) }

  ngOnInit(): void {
  }


  onLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.authentificationService.SignIn(this.user);
    if (isValidUser)
    this.router.navigate(['/products']);
    else
    // alert('Login ou mot de passe incorrecte!');
    this.erreur=1;
    }
    
  }

  //   functionpageconnexion() {
  //     this.router.navigate(['/products']);
  //   }

  //   connecter: any;
  //   connexion(identifiant: any){;
  // this.User = identifiant;
  // this.authentificationService.enterusers(this.User.prenom, this.User.motdepasse);
  // }
  // }

