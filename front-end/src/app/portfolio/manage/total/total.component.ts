import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";

import { Item } from "../../../models/item.model";
import { FetchDataService } from "../../../services/fetch-data.service";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Observable } from "rxjs";
import { SharedDataService } from "../../../services/shared-data.service";

@Component({
  selector: "app-total",
  templateUrl: "./total.component.html",
  styleUrls: ["./total.component.css"]
})
export class TotalComponent implements OnInit {
  displayedColumns = [
    "symbol",
    "companyName",
    "price",
    "latestPrice",
    "quantity",
    "totalValue",
    "timeStamp",
    "deleteId"
  ];
  dataSource = new MatTableDataSource<any>();
  items: any;

  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private fetchDataService: FetchDataService,
              private sharedDataService: SharedDataService) {}

  ngOnInit() {
    // this.dataSource.data = this.fetchDataService.getAvailableInvestments();
    // this.fetchDataService.showMeEveything().subscribe(fetchDataService => {
    //   this.items = fetchDataService;
    //   console.log(this.items);
    //   let temp = this.items;
    //   this.dataSource.data = temp;
    // });
    // this.sharedDataService.fetchDataFromAlles();
    this.sharedDataService.updateAlles();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteItem(deleteId) {
    console.log(deleteId.deleteId);
    fetch("http://127.0.0.1:3001/delete", {
      method: "DELETE", // or 'PUT'
      body: JSON.stringify(deleteId), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => this.sharedDataService.fetchDataFromAlles())
    .then(res => this.sharedDataService.fetchDataFromStocks())
    .then(res => this.sharedDataService.fetchDatafromCryptos());
  }
}

// onAddNewInvestment(form: NgForm) {
//   const newStockInvestment = {
//     stockid: this.stockService.idForSymbol(form.value.symbol),
//     symbol: form.value.symbol,
//     companyName: this.stockService.companyNameForSymbol(form.value.symbol),
//     price: form.value.price,
//     quantity: form.value.quantity,
//     value: form.value.price * form.value.quantity,
//     timeStamp: Date.now(),
//     deleteId: Date.now() * 3
//   }
//   console.log(newStockInvestment);
//   this.saveInv(newStockInvestment);
// }

// saveInv(newStockInvestment) {
//   fetch('http://127.0.0.1:3001/stocks', {
//     method: 'POST', // or 'PUT'
//     body: JSON.stringify(newStockInvestment), // data can be `string` or {object}!
//     headers:{
//       'Content-Type': 'application/json'
//     }
//   }).then(res => res.json())
//   .catch(error => console.error('Error:', error))
//   .then(response => console.log('Success:', response));
// }
