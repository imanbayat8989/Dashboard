import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.scss']
})
export class SalesByMonthComponent {

  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Month wise sales'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    series: [
      {
        name: "Arizona",
        type: "line",
        color: '#044342',
        data: [270,269,295,145,182,215,252,265,233,383,339,396]
      },
      {
        name: "Connecticut",
        type: "line",
        color: '#7e0505',
        data: [50,67,85,25,52,25,52,85,23,43,179,116]
      },
      {
        name: "Ohio",
        type: "line",
        color: '#ed9e20',
        data: [17,19,91,195,112,315,252,165,239,383,239,116]
      },
    
    ],
    credits: {
      enabled: false
    }
  })

  constructor() {}

  ngOnInit(): void {

  }
}
