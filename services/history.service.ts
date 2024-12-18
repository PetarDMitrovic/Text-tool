import { Injectable } from '@angular/core';
import { History, HistoryData } from "../app/model";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history: History = {
    historydata: []
  };

  constructor() {
  }

  getHistory(): History {
    return  this.history;
  }

  addHistory(data: HistoryData) :void{
    this.history.historydata.push(data);
  }

}
