import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  location: string = "Milan%2C%20Italy"

  constructor(public http : HttpClient) { }

  DefaultFetch(page: number): any{ //fech data from api
    return this.http.get('https://www.themuse.com/api/public/jobs?category=Software%20Engineering&page=' + page);
  }

  LevelFetch(level: string, page:number): any{ //fech data from api for level
    return this.http.get('https://www.themuse.com/api/public/jobs?category=Software%20Engineering&level=' + level +'&page=' + page);
  }

  FetchCompany(id: string){ //fech company data from api
    return this.http.get('https://www.themuse.com/api/public/companies/' + id);
  }


}
