import { Component } from '@angular/core';
import { AppService } from './app.service';
import { ButtonAlertComponent } from './button-alert/button-alert.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
