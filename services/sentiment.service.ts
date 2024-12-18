import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import { HistoryService } from './history.service';
import {HistoryData, SentimentAnalysis} from "../app/model";

@Injectable({
  providedIn: 'root'
})
export class SentimentService {

  private readonly apiUrl = environment.postAPI;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  getSentimentAnalysis(text: string, lang: string): Observable<SentimentAnalysis> {
    this.addCommandToHistory(text, lang);
    return this.httpClient.get<SentimentAnalysis>(`${this.apiUrl}/datatxt/sent/v1/?text=${text}&lang=${lang}&token=${sessionStorage.getItem("token")}`);
  }

  addCommandToHistory(text:string, lang: string): void {
    var date_now = new Date();
    var historyData: HistoryData = {date: date_now, type: "GET", url: `${this.apiUrl}/datatxt/sent/v1/?text=${text}&lang=${lang}&token=${sessionStorage.getItem("token")}`};
    this.historyService.addHistory(historyData);
  }
}
