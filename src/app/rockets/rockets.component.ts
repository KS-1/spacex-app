import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';

import { Rocket } from '../rocket';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {
  rockets$: Observable<Rocket[]>;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.rockets$ = this.http
      .get<Rocket[]>("https://api.spacexdata.com/v2/rockets")
      .map(data => _.values(data))
      .do(console.log)
  }

}
