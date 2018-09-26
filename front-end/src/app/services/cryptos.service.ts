import { Injectable } from '@angular/core';
import { Crypto } from '../models/crypto.model';


@Injectable({
  providedIn: 'root'
})
export class CryptosService {
  private availableCryptos: Crypto[] = [
    {"id": 1, "symbol": "BTC", "companyName": "Bitcoin", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
    {"id": 2, "symbol": "ETH", "companyName": "Ethereum", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
    {"id": 3, "symbol": "XRP", "companyName": "Ripple", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
    {"id": 4, "symbol": "BCC", "companyName": "Bitcoin Cash", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
    {"id": 5, "symbol": "EOS", "companyName": "Eosio", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
    {"id": 6, "symbol": "XLM", "companyName": "Stellar Lumens", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
    {"id": 7, "symbol": "LTC", "companyName": "Litecoin", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
    {"id": 8, "symbol": "NEO", "companyName": "NEO", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
    {"id": 9, "symbol": "IOTA", "companyName": "IOTA", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
    {"id": 10, "symbol": "ADA", "companyName": "Cardano", "price": 0, "quantity": 0, "value": 0, "timeStamp": null },
  ];
  
  registerNewCryptoInvestment() {
    return this.availableCryptos.slice();
  }

  companyNameForSymbol(symbol: string){
    return this.availableCryptos.find(crypto => crypto.symbol === symbol).companyName;
  }

  idForSymbol(symbol: string){
    return this.availableCryptos.find(crypto => crypto.symbol === symbol).id;
  }

}
