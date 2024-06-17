import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { lastValueFrom } from 'rxjs';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
constructor(private LoginService:LoginService){}
ngOnInit(): void {
  this.getProducts()
}
async getProducts(){
  let products=await lastValueFrom(this.LoginService.getShoppingProduct())
  console.log("sanjai",products);
  
}
}
