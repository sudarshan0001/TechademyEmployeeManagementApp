import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
showOptions : boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const Token = localStorage.getItem("jwt");
    if(Token){
      this.showOptions = true;
    }
    else{
      this.showOptions = false;
    }
  }

  refresh():void{
    window.location.reload();
  }

  

  logout(){
    localStorage.clear();
    alert("logged out succesfully");
    this.ngOnInit();
    
    this.router.navigate(['']);
    //alert("please login....");
  }

}
