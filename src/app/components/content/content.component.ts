import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(public service : DataService) { }

  data: any;
  offersList: any;
  @ViewChild('select') select!: ElementRef; // select element for choose the level 
  selectedLevel: string = "all";
  page: number = 1;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void{ // fetch data from api
    this.service.DefaultFetch(this.page).subscribe((res: any) => {

      this.data = res;
      this.offersList = this.data.results;
    
    });
  }

  levelChange(level_page: number){ // fetch data from api for level
    this.page = level_page; // takes the page as input to return to page 1 when the level is changed
    this.selectedLevel = this.select.nativeElement.value;

    this.service.LevelFetch(this.selectedLevel, this.page).subscribe((res: any) => {

      this.data = res;
      this.offersList = this.data.results;
    
    });
    
  }


  NextPage(){ // when you want to go to the next page

    this.page = this.page + 1;
    
    if (this.selectedLevel == "all"){
      this.fetchData();
    }else{
      this.levelChange(this.page);
    }
    
  }

  PreviousPage(){ // when you want to go to the next page

    if(this.page > 1){ // It is not possible to go to a page less than 1
      this.page = this.page - 1;

      if (this.selectedLevel == "all"){
        this.fetchData();
      }else{
        this.levelChange(this.page);
      }
    }

    
  }

}


