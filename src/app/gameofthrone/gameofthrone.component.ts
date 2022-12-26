import { Component, OnInit } from '@angular/core';
import { GameofthroneService } from '../services/gameofthrone.service';

@Component({
  selector: 'app-gameofthrone',
  templateUrl: './gameofthrone.component.html',
  styleUrls: ['./gameofthrone.component.css']
})
export class GameofthroneComponent implements OnInit{

  personaje:any;
  constructor(private got:GameofthroneService){ }

  ngOnInit(){
    this.obtenerPersonaje();      
  }

  obtenerPersonaje(){
    this.got.getPersonaje().subscribe(resp => {
      this.personaje = resp;
    });
  }

}
