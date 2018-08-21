import { Component, OnInit } from '@angular/core';
import { ContenutiService } from '../../services/contenuti.service';
import { Sezione } from '../../interfaces/sezione';
import { SezioneClass } from '../../domain/sezione';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public sezioni: Sezione[] = [new SezioneClass()];

  constructor(private dataService: ContenutiService) { }

  ngOnInit() {
    this.sezioni = this.dataService.getSezioniDaMostrare();
  }
}
