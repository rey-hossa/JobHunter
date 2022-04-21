import { Component, OnInit, Input  } from '@angular/core';

import { CurrentOfferService } from '../../services/current-offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  @Input() offer: any; // take the data of single offer from Contents Component

  constructor(private currentOfferService: CurrentOfferService) { }

  ngOnInit(): void { }

  moreInfo(){ // Click on the offer to go to the More Info Component and passes the data to him Current Offer Service
    this.currentOfferService.updateData(this.offer);
  }

}
