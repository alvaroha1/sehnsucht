import { Injectable } from "@angular/core";
import { FetchDataService } from "../services/fetch-data.service";
import { ApiDataService } from "../services/api-data.service";

@Injectable({
  providedIn: "root"
})
export class SharedDataService {
  stocks: any;
  cryptos: any;
  items: any;
  latestStockData: any;
  latestCryptoData: any;
  itemsUpdated:any;

  constructor(
    private fetchDataService: FetchDataService,
    private apiDataService: ApiDataService
  ) {}

  fetchDataFromStocks() {
    this.fetchDataService.showMeTheMoney().subscribe(fetchDataService => {
      this.stocks = fetchDataService;
    });
  }

  fetchDatafromCryptos() {
    this.fetchDataService.showMeTheCryptos().subscribe(fetchDataService => {
      this.cryptos = fetchDataService;
    });
  }

  fetchDataFromAlles() {
    this.fetchDataService.showMeEveything().subscribe(fetchDataService => {
      this.items = fetchDataService;
      this.updateAlles();
    });
  }

  updateStocksPrice = () => new Promise((resolve, reject) => {
    return this.fetchDataService.showMeTheMoney().subscribe(fetchDataService => {
      this.stocks = fetchDataService;

      this.apiDataService.getStockApiData().subscribe(apiDataService => {
        this.latestStockData = apiDataService;
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
      this.latestCryptoData = apiDataService.reduce((acc, el) =>{ return {...acc, [el.symbol.slice(0,-4)]:el}},{});

      this.cryptos.forEach(
        el =>
          (el.latestPrice = this.latestCryptoData[el.symbol].latestPrice)
      );
      this.latestCryptoData = this.cryptos.concat(this.latestStockData);
      resolve(true)
       
      });
    });
  })

  async updateAlles() {
    await this.updateStocksPrice();
    await this.updateCryptosPrice();
    console.log('here', this.latestCryptoData);
    console.log('here', this.latestStockData);
    await this.latestStockData.concat(this.latestCryptoData);
    await console.log(this.latestStockData.concat(this.latestCryptoData));
   
  }


} 


