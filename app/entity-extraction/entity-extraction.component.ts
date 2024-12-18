import { Component, OnInit } from '@angular/core';
import {EntityExtraction} from "../model";
import {ExtractionService} from "../../services/extraction.service";


@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  text = "";
  min_confidence = 0;
  counter = 0;

  image = false;
  abstract = false;
  category = false;

  include="";

  //test = "cao";
  response: EntityExtraction ={
    annotations: []
  }



  constructor(private extractionService: ExtractionService) { }

  ngOnInit(): void {
  }

  getResponse():void{
    if (this.image) {
      this.include += "image";
      this.counter += 1;
    }
    if (this.abstract) {
      if (this.counter > 0) {
        this.include += ",";
      }
      this.include += "abstract";
    }
    if (this.category) {
      if (this.counter > 0) {
        this.include += ",";
      }
      this.include += "category";
    }
    //this.test = "zdravo"

    this.extractionService.getResponse(this.text, this.min_confidence, this.include).subscribe((response) =>{
      this.include="";
      //this.test = "zdravo"
      this.response = response;
    })

  }

}
