import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  // ApiDataService: Array<any>;
  ApiDataService: any[];
  
  constructor(private http: HttpClient) { }

  getStockApiData() {
    return this.http.get('https://api.iextrading.com/1.0/stock/market/batch?symbols=MMM,AXP,AAPL,BA,CAT,CVX,CSCO,KO,DIS,DWDP,XOM,GS,HD,IBM,INTC,JNJ,JPM,MCD,MRK,MSFT,NKE,PFE,PG,TRV,UTX,UNH,VZ,V,WMT,WBA&types=quote');
  }

  getCryptoPrices() {
    return this.http.get('https://api.iextrading.com/1.0/stock/market/crypto?filter=symbol,companyName,latestPrice');
  }

  getSectorPerformance() {
    return this.http.get('https://api.iextrading.com/1.0/stock/market/sector-performance');
  }

}
