import { Component, OnInit, OnDestroy, DoCheck} from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, DoCheck {

  title = 'mariannasorrentino.com';

  constructor(private auth: AuthService){ }
  
  ngOnInit() {
  }
  ngDoCheck() {
  }
  ngOnDestroy() {
  }
}
