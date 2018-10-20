import { Injectable } from '@angular/core';
import { Stock } from '../models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private availableStocks: Stock[] = [
      {"id": 1, "symbol": "MMM", "companyName": "3M", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 2, "symbol": "AXP", "companyName": "American Express", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 3, "symbol": "AAPL", "companyName": "Apple", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 4, "symbol": "BA", "companyName": "Boeing", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 5, "symbol": "CAT", "companyName": "Caterpillar", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 6, "symbol": "CVX", "companyName": "Chevron", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 7, "symbol": "CSCO", "companyName": "Cisco", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 8, "symbol": "KO", "companyName": "Coca-cola", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 9, "symbol": "DIS", "companyName": "Disney", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 10, "symbol": "DWDP", "companyName": "DowDuPont Inc", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 11, "symbol": "XOM", "companyName": "Exxon Mobil", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 12, "symbol": "GS", "companyName": "Goldman Sachs", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 13, "symbol": "HD", "companyName": "Home Depot", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 14, "symbol": "IBM", "companyName": "IBM", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 15, "symbol": "INTC", "companyName": "Intel", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 16, "symbol": "JNJ", "companyName": "Johnson & Johnson", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 17, "symbol": "JPM", "companyName": "JPMorgan Chase", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 18, "symbol": "MCD", "companyName": "McDonald's", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 19, "symbol": "MRK", "companyName": "Merck", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 20, "symbol": "MSFT", "companyName": "Microsoft", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 21, "symbol": "NKE", "companyName": "Nike", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 22, "symbol": "PFE", "companyName": "Pfizer", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 23, "symbol": "PG", "companyName": "Procter & Gamble", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 24, "symbol": "TRV", "companyName": "Travelers Companies Inc", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 25, "symbol": "UTX", "companyName": "United Technologies", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 26, "symbol": "UNH", "companyName": "UnitedHealth", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 27, "symbol": "VZ", "companyName": "Verizon", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 28, "symbol": "V", "companyName": "Visa", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 29, "symbol": "WMT", "companyName": "Wal-Mart", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
      {"id": 30, "symbol": "WBA", "companyName": "Walgreen", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
    ];
    
    registerNewStockInvestment() {
      return this.availableStocks.slice();
    }

    companyNameForSymbol(symbol: string){
      return this.availableStocks.find(stock => stock.symbol === symbol).companyName;
    }

    idForSymbol(symbol: string){
      return this.availableStocks.find(stock => stock.symbol === symbol).id;
    }
}
