import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Crypto } from '../../../../models/crypto.model';
import { FetchDataService } from '../../../../services/fetch-data.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs';
import { SharedDataService } from '../../../../services/shared-data.service';

@Component({
  selector: 'app-table-cryptos',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class CryptosTableComponent implements OnInit, AfterViewInit {
  displayedColumns = ["symbol", "companyName", "price", "quantity", "totalValue", "timeStamp"];
  dataSource = new MatTableDataSource<Crypto>();
  cryptos:any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.fetchDatafromCryptos()
        // this.dataSource.data = this.fetchDataService.getAvailableInvestments();
        // this.fetchDataService.showMeTheCryptos().subscribe(fetchDataService => {
        //   this.cryptos = fetchDataService;
        //   console.log(this.cryptos);
        //   let temp = this.cryptos;
        //   this.dataSource.data = temp;
        // });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
