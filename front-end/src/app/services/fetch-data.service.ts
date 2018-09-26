import { Injectable } from '@angular/core';
import { Stock } from '../models/stock.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { 
  }

  private availableInvestments: Stock[] = [
    {"id": 1, "symbol": "MMM", "companyName": "3M", "price": 33, "quantity": 2, "value": 66, "timeStamp": 1537539817277 },
  ];
  
  getAvailableInvestments() {
    return this.availableInvestments;
  }

  showMeTheMoney() {
    return this.http.get('http://localhost:3001/stocks');
  }

  showMeTheCryptos() {
    return this.http.get('http://localhost:3001/cryptos');
  }

  showMeEveything() {
    return this.http.get('http://localhost:3001/alles');
  }
}


