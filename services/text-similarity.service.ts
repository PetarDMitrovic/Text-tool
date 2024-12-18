import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {HistoryData, Similarity} from "../app/model";
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityServiceSimilarityService {

  private readonly apiUrl = environment.postAPI;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  getSimilarity(text1: string, text2: string): Observable<Similarity> {
    this.addCommandToHistory(text1, text2);
    return this.httpClient.get<Similarity>(`${this.apiUrl}/datatxt/sim/v1/?lang=en&text1=${text1}&text2=${text2}&token=${sessionStorage.getItem("token")}`);
  }

  addCommandToHistory(text1: string, text2: string): void {
    var date_now = new Date();
    var historyData: HistoryData = {date: date_now, type: "GET", url: `${this.apiUrl}/datatxt/sim/v1/?lang=en&text1=${text1}&text2=${text2}&token=${sessionStorage.getItem("token")}`};
    this.historyService.addHistory(historyData);
  }
}
