import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit{

  pais:any;
  constructor(private ps: PaisesService){}

  ngOnInit() {
   this.obtenerPais();   
  }

  obtenerPais(){
    this.ps.getPais().subscribe(resp =>{
      this.pais = resp; 
    });
    
  }

}
