import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  private token: string;

  constructor() {
    this.token = '';
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToKen() : string {
    return this.token;
  }

  setTokenLocal(): void {
    // @ts-ignore
    this.token = localStorage.setItem("token", this.token);
  }

  getTokenLocal(): string {
    // @ts-ignore
    return localStorage.getItem("token");
  }

}
