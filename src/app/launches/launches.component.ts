import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';

import { Launch } from '../launch';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  launches$: Observable<Launch[]>;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.launches$ = this.http
      .get<Launch[]>("https://api.spacexdata.com/v2/launches/upcoming")
      .map(data => _.values(data))
      .do(console.log)
  }

}
