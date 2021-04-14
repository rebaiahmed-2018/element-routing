import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'elements-with-routing';

  constructor(private readonly api: ApiService) {}

  ngOnInit() {
    console.log(this.api.getCountries());
  }
}
