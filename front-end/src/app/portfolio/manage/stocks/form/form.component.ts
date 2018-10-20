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
    this.saveInv(newStockInvestment);
  }

  saveInv(newStockInvestment) {
    fetch('http://127.0.0.1:3001/stocks', {
      method: 'POST', 
      body: JSON.stringify(newStockInvestment),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => this.sharedDataService.fetchDataFromStocks())
      .then(res => this.sharedDataService.fetchDataFromAlles());
  }
}