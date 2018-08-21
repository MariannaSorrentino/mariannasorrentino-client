import { Component, OnInit } from '@angular/core';
import { ContenutiService } from '../../services/contenuti.service';
import { Contenuto } from '../../interfaces/contenuto';
import { ContenutoClass } from '../../domain/contenuto';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public contenuto: Contenuto = new ContenutoClass();


  constructor(private dataService: ContenutiService) { }

   ngOnInit() {
    this.contenuto = this.dataService.getContenuto('about');
  }
}
