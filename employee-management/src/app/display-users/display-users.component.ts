import { Component, OnInit } from '@angular/core';
import {HttpClientService } from '../service/http-client.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})

export class DisplayUsersComponent implements OnInit {

  uName = 'Jord';
  data;


  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
  }

  FindUser(): void
  {
  }
}
