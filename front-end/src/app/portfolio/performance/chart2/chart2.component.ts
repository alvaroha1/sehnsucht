import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {
    series: [{
      data: [1, 2, 3]
    }]
  };
  
  constructor() { }

  ngOnInit() {
  }

}
