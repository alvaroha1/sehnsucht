import { Component, OnInit } from '@angular/core';
import { Stock } from '../../../../models/stock.model';
import { StocksService } from '../../../../services/stocks.service';
import { NgForm } from '@angular/forms';
import { SharedDataService } from '../../../../services/shared-data.service';

@Component({
  selector: 'app-form-stocks',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class StocksFormComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StocksService,
              private sharedDataService: SharedDataService ) { } //

  ngOnInit() {
    this.stocks = this.stockService.registerNewStockInvestment();
  }

  onAddNewInvestment(form: NgForm) {
    const newStockInvestment = {
      stockid: this.stockService.idForSymbol(form.value.symbol), 
      symbol: form.value.symbol,
      companyName: this.stockService.companyNameForSymbol(form.value.symbol),
      price: form.value.price,
      quantity: form.value.quantity,
      value: form.value.price * form.value.quantity,
      timeStamp: Date.now(),
      deleteId: Date.now() * 3
    }
    // console.log(newStockInvestment);
    this.saveInv(newStockInvestment);
    // this.sharedDataService.fetchDataFromStocks();
  }

  saveInv(newStockInvestment) {
    fetch('http://127.0.0.1:3001/stocks', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(newStockInvestment), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => this.sharedDataService.fetchDataFromStocks())
      .then(res => this.sharedDataService.fetchDataFromAlles());
    // .catch(error => console.error('Error:', error))
    // .then(response => console.log('Success:', response));
  }
}

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   headers : new Headers(),
//   body:JSON.stringify({tittle:tittle, body:body})
// }).then((res) => res.json())
// .then((data) =>  console.log(data))
// .catch((err)=>console.log(err))

// CREATE TABLE Stocks (
//   //     ID int NOT NULL AUTO_INCREMENT,
//   //     UserID int NOT NULL,
//       Symbol varchar(255),
//   //     Company varchar(255),
//       Price int,
//       Quantity int,
//       Value int,
//       Timestamp int
//   );

//////taula actual
  // CREATE TABLE Stocks (
  //       Symbol varchar(255),
  //       Price int,
  //       Quantity int,
  //       Value int,
  //       Timestamp varchar(255)
  //   );