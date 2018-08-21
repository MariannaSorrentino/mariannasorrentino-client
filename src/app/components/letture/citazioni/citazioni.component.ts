import { Component, OnInit } from '@angular/core';
import { ContenutiService } from '../../../services/contenuti.service';
import { Citazione } from '../../../interfaces/citazione';
import { CitazioneClass } from '../../../domain/citazione';
import { AuthService } from '../../../services/auth.service';
//import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-citazioni',
  templateUrl: './citazioni.component.html',
  styleUrls: ['./citazioni.component.css']
})
export class CitazioniComponent implements OnInit {

  public citazioni: Citazione[] = [new CitazioneClass()];

  constructor(private authService: AuthService, private dataService: ContenutiService) {
    
   }

  ngOnInit() {

    this.authService.logInServer().subscribe((resp)=>{
      this.authService.logInClient(resp['token']);
      console.log('A');
    }, undefined, ()=>{
      this.dataService.getCitazioniServer().subscribe((resp)=>{
        this.citazioni = <Citazione[]> resp;
      }, undefined, ()=>{
        this.authService.logOutServer().subscribe(undefined, undefined, ()=>{this.authService.logOutClient()});
      });
    });

  };
  //   this.authService.logInServerApp();

  //   this.dataService.getCitazioniServer().subscribe((response)=>{
  //       this.citazioni = <Citazione[]> response;
  //       console.log('citazioni:',response);
  //       //this.citazioni = this.dataService.getCitazioni();  
  //     }, undefined, ()=>this.authService.logOutServerApp()); 
  // };

}
