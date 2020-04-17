import { Component, OnInit } from '@angular/core';
import {HttpClientService } from '../service/http-client.service';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  uName = 'j';
  pWord = 'fef';
  data: string;
  localvariable = {};

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {

  }

  Register(): void
  {
    this.httpClientService.register(this.uName, this.pWord).subscribe(data => {console.log(data); this.data = JSON.stringify(data); });
  }

  Login(): void
  {
    this.httpClientService.login(this.uName, this.pWord).subscribe(data => {console.log(data); this.data = JSON.stringify(data); });
  }
}
