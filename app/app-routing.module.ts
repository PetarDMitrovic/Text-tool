import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import {EntityExtractionComponent} from "./entity-extraction/entity-extraction.component";
import { AuthGuard } from './auth.guard';
import {TextSimilarityComponent} from "./text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./language-detection/language-detection.component";
import {HistoryComponent} from "./history/history.component";
import {SentimentAnalysisComponent} from "./sentiment-analysis/sentiment-analysis.component";


const routes: Routes = [
  {
    path: "configuration",
    component: ConfigurationComponent,

  },

  {
    path : "entity_extraction",
    component: EntityExtractionComponent,
    canActivate: [AuthGuard]
  },

  {
    path : "text_similarity",
    component: TextSimilarityComponent,
    canActivate: [AuthGuard]
  },

  {
    path : "language_detection",
    component: LanguageDetectionComponent,
    canActivate: [AuthGuard]
  },

  {
    path : "sentiment_analysis",
    component: SentimentAnalysisComponent,
    canActivate: [AuthGuard]
  },

  {
    path : "history",
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
