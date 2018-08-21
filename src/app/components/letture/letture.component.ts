import { Component, OnInit } from '@angular/core';
import { ContenutiService } from '../../services/contenuti.service';
import { Citazione } from '../../interfaces/citazione';
import { Contenuto } from '../../interfaces/contenuto';
import { ContenutoClass } from '../../domain/contenuto';

@Component({ 
  selector: 'app-letture',
  templateUrl: './letture.component.html',
  styleUrls: ['./letture.component.css']
})
export class LettureComponent implements OnInit {
  
  public contenuto: Contenuto = new ContenutoClass();

  constructor(private dataService: ContenutiService) {}

   ngOnInit() {
    this.contenuto = this.dataService.getContenuto('letture');
  }
}
