import { Component, OnInit } from '@angular/core';
import { TextSimilarityServiceSimilarityService } from '../../services/text-similarity.service';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1 = "";
  text2 = "";
  coeficient = 0;

  constructor(private similarityService: TextSimilarityServiceSimilarityService) { }

  ngOnInit(): void {
  }

  getSimilarity(): void {

    this.similarityService.getSimilarity(this.text1, this.text2).subscribe((coeficient) => {
      this.coeficient = coeficient.similarity;
    })
  }


}
