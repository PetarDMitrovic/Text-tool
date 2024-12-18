import { Component, OnInit } from '@angular/core';
import { History } from '../model';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyList: History =  {
    historydata: []
  };

  constructor(private historyService: HistoryService) {
  }

  ngOnInit(): void {
    this.historyList = this.historyService.getHistory();
  }
}
