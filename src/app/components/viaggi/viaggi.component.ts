import { Component, OnInit } from '@angular/core';
import { ContenutiService } from '../../services/contenuti.service';
import { Contenuto } from '../../interfaces/contenuto';
import { Viaggio } from '../../interfaces/viaggio';
import { ContenutoClass } from '../../domain/contenuto';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-viaggi',
  templateUrl: './viaggi.component.html',
  styleUrls: ['./viaggi.component.css']
})
export class ViaggiComponent implements OnInit {
  public contenuto: Contenuto = new ContenutoClass();
  public viaggi: Viaggio[];
  public link: string;

  constructor(private authService:AuthService, private dataService: ContenutiService) {
    
  }

  ngOnInit() {

    this.contenuto = this.dataService.getContenuto('viaggi');

    this.authService.logInServer().subscribe(
    (resp)=>{
      this.authService.logInClient(resp['token']);
    }, 
    undefined, 
    ()=>{
      this.dataService.getViaggiServer().subscribe(
      (resp)=>{
        this.viaggi = <Viaggio[]> resp;
      }, 
      undefined, 
      ()=>{
        this.viaggi.forEach((viaggio)=>{viaggio.url= this.contenuto.links[0] +'/' + viaggio.nome;
      });
      this.authService.logOutServer().subscribe(
      (resp)=>{
      }, 
      undefined, 
      ()=>{
        this.authService.logOutClient()});
      });    
    });
  }
}
