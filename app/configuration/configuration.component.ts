import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../services/config.service";
import {NULL_AS_ANY} from "@angular/compiler-cli/src/ngtsc/typecheck/src/expression";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  token: string;
  // @ts-ignore
  tokenSaved: string = localStorage.getItem("token");
  linkEnabled: boolean = false;

  constructor(private configService: ConfigService) {
    this.token = this.configService.getToKen();
  }

  ngOnInit(): void {
  }

  setToken()  {
    this.configService.setToken(this.token);

  }

  setTokenLocal() {
    this.configService.setTokenLocal();

  }

  saveToken() {
    sessionStorage.setItem("token", this.token);
  }

  getToken(){
    return sessionStorage.getItem("token");
  }

  getTokenLocal() {
    return this.configService.getTokenLocal();
  }



}
