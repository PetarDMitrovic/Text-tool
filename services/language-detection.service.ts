import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {HistoryData, Language, LanguageDetecting} from "../app/model";
import { HistoryService } from './history.service';
@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  private readonly apiUrl = environment.postAPI;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  getLanguage(text: string, clean: boolean): Observable<LanguageDetecting> {
    this.addCommandToHistory(text, clean);
    return this.httpClient.get<LanguageDetecting>(`${this.apiUrl}/datatxt/li/v1/?lang=en&clean=${clean}&text=${text}&token=${sessionStorage.getItem("token")}`);
  }

  addCommandToHistory(text: string, clean: boolean): void {
    var date_now = new Date();
    var historyData: HistoryData = {date: date_now, type: "GET", url: `${this.apiUrl}/datatxt/li/v1/?lang=en&clean=${clean}&text=${text}&token=${sessionStorage.getItem("token")}`};
    this.historyService.addHistory(historyData);
  }
}
