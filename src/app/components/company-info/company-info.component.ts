import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { CurrentOfferService } from '../../services/current-offer.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  offer: any;
  offerId!: string;
  companyData: any;

  constructor(private currentOfferService: CurrentOfferService, public service : DataService) {  }

  ngOnInit(): void {

    this.currentOfferService.currentData.subscribe((e) => { //take the offer data from Current Offer Service
      this.offer = e;
      this.offerId = this.offer.company.id;
    })

    this.service.FetchCompany(this.offerId).subscribe((res: any) => { //Fetch the company data with id

      this.companyData = res;
    
    });

  }

}
