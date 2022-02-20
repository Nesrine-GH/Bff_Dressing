import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/model';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  users: User[] = [{"username":"admin","password":"123","roles":['ADMIN']},
                   {"username":"nesrine","password":"7789","roles":['USER']} ];
           
public   loggedUser:string;
public isloggedIn: Boolean = false;
public roles: string []=[];

  constructor(private router: Router) { }



  SignIn(user :User):Boolean{
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
    if(user.username=== curUser.username && user.password==curUser.password) {
    validUser = true;
    this.loggedUser = curUser.username;
    this.isloggedIn = true;
    this.roles = curUser.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }
    });
    return validUser;
    }
    
    isAdmin():Boolean{
      if (!this.roles) //this.roles== undefiened
      return false;
      return (this.roles.indexOf('ADMIN') >-1) ;
      
      }

  logout() {
    this.isloggedIn = false;
    this.loggedUser ==undefined;
    this.roles == undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }
        




}
//   url="https://localhost:4200/Login";
//   public Users = [
//     { prenom: "faty", motdepasse: "toto" },
//     { prenom: "nesrine", motdepasse: "123" },
//     { prenom: "emy", motdepasse: "titi" }
//   ]
//   constructor(private router: Router) { }

//   disabled:boolean=false;


// enterusers(prenom:any,motdepasse:any){
// this.Users.forEach(element =>{
//   if(element.prenom==prenom && element.motdepasse==motdepasse){
//     this.router.navigate(['/products'])
//     this.disabled=true;


//     console.log("vous etes connectés");} else{
//       console.log("Vos identifiants sont incorrects");
//     };
 
// })




