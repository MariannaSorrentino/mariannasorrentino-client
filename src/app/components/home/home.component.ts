import { Component, OnInit } from '@angular/core';
import { ContenutiService } from '../../services/contenuti.service';
import { Contenuto } from '../../interfaces/contenuto';
import { ContenutoClass } from '../../domain/contenuto';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public contenuto: Contenuto = new ContenutoClass();

  constructor(private dataService: ContenutiService) { }

  ngOnInit() {
    this.contenuto = this.dataService.getContenuto('home');
  }
}
