import { Component, OnInit } from '@angular/core';
import { ContenutiService } from '../../../services/contenuti.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Viaggio } from '../../../interfaces/viaggio';
import { Tappa } from '../../../interfaces/tappa';
import { ViaggioClass } from '../../../domain/viaggio';
import { TappaClass } from '../../../domain/tappa';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-dettaglio-viaggio',
  templateUrl: './dettaglio-viaggio.component.html',
  styleUrls: ['./dettaglio-viaggio.component.css']
})
export class DettaglioViaggioComponent implements OnInit {

  public viaggio:Viaggio = new ViaggioClass();
  public tappa:Tappa = new TappaClass();

  constructor(private dataService: ContenutiService, private activateRoute: ActivatedRoute, 
              private authService: AuthService) {    
  }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe((params) => {
      if(params.get('nome')){
        this.authService.logInServer().subscribe(
        (resp)=>{
          this.authService.logInClient(resp['token']);
        }, 
        undefined, 
        ()=>{
          this.dataService.getViaggiServer().subscribe(
            (resp)=>{
              let viaggi = <Viaggio[]> resp;
              this.viaggio = viaggi.find((viaggio)=>{return viaggio.nome === params.get('nome')});
            }, 
            undefined, 
            ()=>{
              this.authService.logOutServer().subscribe(
              (resp)=>{
                
              }, 
              undefined, 
              ()=>{
                this.authService.logOutClient()
              });
            });
          });
        }
    });
  };

  onClick(id:number){
    this.tappa = this.viaggio.tappe.find(tappa=>tappa.id === id);
  };
}
