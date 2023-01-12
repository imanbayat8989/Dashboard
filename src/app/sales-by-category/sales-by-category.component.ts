import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})
export class SalesByCategoryComponent {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Category wise sales'
    },
    xAxis: {
      categories: [
        'Electronics',
        'Groceries',
        'Cosmetics',
        'clothes',
        'Appliances',
      ],
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            name:'Electronics',
            y: 41.0,
            color:'#044342'
          },
          {
            name:'Groceries',
            y: 11.0,
            color:'#159322'
          },
          {
            name:'Cosmetics',
            y: 6.5,
            color:'#ed9e20'
          },
          {
            name:'clothes',
            y: 15.2,
            color:'#6920fb'
          },
          {
            name:'Appliances',
            y: 3.2,
            color:'#121212'
          },
          
          
        ]
      }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() {}

  ngOnInit(): void {

  }

}
