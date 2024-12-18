import { Component, OnInit } from '@angular/core';
import {SentimentAnalysis} from "../model";
import {SentimentService} from "../../services/sentiment.service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text = "";
  lang = "";

  sentiment_analysis: SentimentAnalysis = {
    sentiment: {
      score: 0, type: "neutral"
    }
  }


  constructor(private sentimentService: SentimentService) {
  }

  ngOnInit(): void {
  }

  getSentimentAnalysis(): void {
    this.lang = document.querySelector('input[name="lang"]:checked')!.id;
    this.sentimentService.getSentimentAnalysis(this.text, this.lang).subscribe((sentiment_analysis) => {
      this.sentiment_analysis = sentiment_analysis;
      var c = <HTMLCanvasElement>document.getElementById("myCanvas");
      var ctx = c.getContext("2d")!;
      var temporary_score = sentiment_analysis.sentiment.score + 1;
      temporary_score /= 2;
      var red = (1 - temporary_score) * 255;
      var green = temporary_score * 255;
      ctx.fillStyle = "rgb(" + red + ", " + green + ", 0)";
      ctx.fillRect(0, 0, 150, 150);
    })

  }
}
