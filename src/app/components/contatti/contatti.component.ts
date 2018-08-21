import { Component, OnInit } from '@angular/core';
import { ContenutiService } from '../../services/contenuti.service';
import { Contenuto } from '../../interfaces/contenuto';
import { ContenutoClass } from '../../domain/contenuto';


@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
  public contenuto: Contenuto = new ContenutoClass();


  constructor(private dataService: ContenutiService) {}

   ngOnInit() {
    this.contenuto = this.dataService.getContenuto('contatti');
  }
}
