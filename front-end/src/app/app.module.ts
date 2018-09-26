import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { ManageComponent } from './portfolio/manage/manage.component';
import { PerformanceComponent } from './portfolio/performance/performance.component';
import { StocksComponent } from './portfolio/manage/stocks/stocks.component';
import { CryptosComponent } from './portfolio/manage/cryptos/cryptos.component';
import { TotalComponent } from './portfolio/manage/total/total.component';
import { StocksFormComponent } from './portfolio/manage/stocks/form/form.component';
import { StocksTableComponent } from './portfolio/manage/stocks/table/table.component';
import { CryptosFormComponent } from './portfolio/manage/cryptos/form/form.component';
import { CryptosTableComponent } from './portfolio/manage/cryptos/table/table.component';

import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './services/stocks.service';
import { FetchDataService } from './services/fetch-data.service';
import { ApiDataService } from './services/api-data.service';
import { Chart1Component } from './portfolio/performance/chart1/chart1.component';
import { Chart2Component } from './portfolio/performance/chart2/chart2.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedDataService } from './services/shared-data.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    ManageComponent,
    PerformanceComponent,
    StocksComponent,
    CryptosComponent,
    TotalComponent,
    StocksFormComponent,
    StocksTableComponent,
    CryptosFormComponent,
    CryptosTableComponent,
    Chart1Component,
    Chart2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [StocksService, FetchDataService, ApiDataService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
