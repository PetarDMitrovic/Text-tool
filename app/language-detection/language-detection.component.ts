import { Component, OnInit } from '@angular/core';
import { LanguageDetecting } from '../model';
import { LanguageDetectionService } from '../../services/language-detection.service';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text = "";
  clean = false;

  language: LanguageDetecting = {
    detectedLangs: []
  }

  constructor(private languageDetectionService: LanguageDetectionService) { }

  ngOnInit(): void {
  }

  getLanguage(): void {
    this.languageDetectionService.getLanguage(this.text, this.clean).subscribe((language) => {
      this.language = language;
    })
  }
}
