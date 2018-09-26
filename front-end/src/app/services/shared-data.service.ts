import { Injectable } from "@angular/core";
// import { BehaviorSubject } from "rxjs";
import { FetchDataService } from "../services/fetch-data.service";
import { ApiDataService } from "../services/api-data.service";
// import { Crypto } from '../models/crypto.model';

@Injectable({
  providedIn: "root"
})
export class SharedDataService {
  stocks: any;
  cryptos: any;
  items: any;
  latestStockData: any;
  latestCryptoData: [];
  itemsUpdated:any;

  constructor(
    private fetchDataService: FetchDataService,
    private apiDataService: ApiDataService
  ) {}

  fetchDataFromStocks() {
    this.fetchDataService.showMeTheMoney().subscribe(fetchDataService => {
      this.stocks = fetchDataService;
      // console.log(this.stocks);
      // this.updateStocksPrice(this.stocks);
    });
  }

  fetchDatafromCryptos() {
    this.fetchDataService.showMeTheCryptos().subscribe(fetchDataService => {
      this.cryptos = fetchDataService;
      // console.log(this.cryptos);
    });
  }

  fetchDataFromAlles() {
    this.fetchDataService.showMeEveything().subscribe(fetchDataService => {
      this.items = fetchDataService;
      // console.log(this.items);
      this.updateAlles();
    });
  }

  updateStocksPrice = () => new Promise((resolve, reject) => {
    return this.fetchDataService.showMeTheMoney().subscribe(fetchDataService => {
      this.stocks = fetchDataService;

      this.apiDataService.getStockApiData().subscribe(apiDataService => {
        this.latestStockData = apiDataService;
        // console.log(this.latestStockData);
        this.stocks.forEach(
          el =>
            (el.latestPrice = this.latestStockData[el.symbol].quote.latestPrice)
        );
        this.latestStockData = this.stocks;
        resolve(true)
      });
    });
  })

  updateCryptosPrice = () => new Promise((resolve, reject) => {
    this.fetchDataService.showMeTheCryptos().subscribe(fetchDataService => {
      this.cryptos = fetchDataService;

      this.apiDataService.getCryptoPrices().subscribe(apiDataService => {
      // this.latestCryptoData = apiDataService.reduce((acc, el) =>{console.log(acc,el.symbol); return {...acc, [el.symbol.slice(0,-4)]:el}},{});
      this.latestCryptoData = apiDataService.reduce((acc, el) =>{ return {...acc, [el.symbol.slice(0,-4)]:el}},{});

      this.cryptos.forEach(
        el =>
          (el.latestPrice = this.latestCryptoData[el.symbol].latestPrice)
      );
      this.latestCryptoData = this.cryptos.concat(this.latestStockData);
      resolve(true)

        // this.latestCryptoData.forEach( el => this.cryptoTagger(el.symbol));
        // this.stocks.forEach(
        //   el =>
        //     (el.latestPrice = this.latestStockData[el.symbol].quote.latestPrice)
        // );
       
      });
    });
  })

  async updateAlles() {
    await this.updateStocksPrice();
    await this.updateCryptosPrice();
    console.log('here', this.latestCryptoData);
    console.log('here', this.latestStockData);
    await this.latestStockData.concat(this.latestCryptoData);
    // console.log(this.latestStockData.concat(this.latestCryptoData));
    await console.log(this.latestStockData.concat(this.latestCryptoData));
    // const crypto = await this.latestCryptoData;
    // console.log(stocks);
    // await this.itemsUpdated === [...this.latestStockData];
    // console.log(this.latestStockData);
  }


} 


