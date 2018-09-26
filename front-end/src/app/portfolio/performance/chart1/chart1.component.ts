import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {
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
