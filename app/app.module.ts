import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import {FormsModule} from "@angular/forms";
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import {HttpClientModule} from "@angular/common/http";
import {TextSimilarityComponent} from "./text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./language-detection/language-detection.component";
import {HistoryComponent} from "./history/history.component";
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    HistoryComponent,
    SentimentAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
