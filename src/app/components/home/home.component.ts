import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private LoginService:LoginService){}
  ngOnInit(): void {
    this.getProducts()
  }
  async getProducts(){
    let products=await lastValueFrom(this.LoginService.getShoppingProduct())
    console.log("sanjai",products);
    
  }
}
