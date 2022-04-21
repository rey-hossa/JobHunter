import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CurrentOfferService } from '../../services/current-offer.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {

  offer: any;

  constructor(private currentOfferService: CurrentOfferService) { 
    

  }

  ngOnInit(): void {

    this.currentOfferService.currentData.subscribe((e) => { //take the offer data from Current Offer Service
      this.offer = e;
    })
  }

}
