import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Stock } from '../../../../models/stock.model';
import { SharedDataService } from '../../../../services/shared-data.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FetchDataService } from '../../../../services/fetch-data.service';

@Component({
  selector: 'app-table-stocks',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class StocksTableComponent implements OnInit, AfterViewInit {
  displayedColumns = ["symbol", "companyName", "price", "quantity", "totalValue", "timeStamp"];
  dataSource = new MatTableDataSource<Stock>();
  stocks:any;
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.fetchDataFromStocks();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
