import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import { EntityExtraction, HistoryData } from "../app/model";
import { HistoryService } from './history.service';


@Injectable({
  providedIn: 'root'
})
export class ExtractionService {

  private readonly api = environment.postAPI;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) {
  }


  getResponse(text: string, min_confidence: number, include: string): Observable<EntityExtraction>{
    this.addToHistory(text, min_confidence, include);
    return this.httpClient.get<EntityExtraction>(`${this.api}/datatxt/nex/v1/?text=${text}&include=${include}&min_confidence=${min_confidence}&token=${sessionStorage.getItem("token")}`);

  }

  addToHistory(text: string, min_confidence: number, include: string): void{
      var date_now = new Date();
      var historyData: HistoryData = {date: date_now, type: "GET",
        url: `${this.api}/datatxt/nex/v1/?text=${text}&include=${include}&min_confidence=${min_confidence}&token=${sessionStorage.getItem("token")}`};
      this.historyService.addHistory(historyData);
  }

}
