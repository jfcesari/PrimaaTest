import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-button-alert',
  templateUrl:"button-alert.component.html", //Fichier HTML contenant le bouton
  styleUrls: ['button-alert.component.scss']
})

export class ButtonAlertComponent implements OnInit{

  //Constructeur
  constructor(private appService: AppService){}

  //Fonction appelée lors de l'initialisation du contrôleur
  ngOnInit(){
  }

  //Fonction appelée lors du clic
  handleClick(){
    this.appService.getSuccess().subscribe(data => alert(data))
  }
}