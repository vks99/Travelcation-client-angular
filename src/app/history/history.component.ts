import { Component, OnInit } from '@angular/core';
import { HistoryService, History } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: History[] = [];

  constructor(private historyService: HistoryService) {}
  ngOnInit(): void {
    this.historyService.getHistory().subscribe((data) => {
      this.history = data;
    });
  }
}