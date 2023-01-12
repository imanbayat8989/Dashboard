import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-few-transacttions',
  templateUrl: './last-few-transacttions.component.html',
  styleUrls: ['./last-few-transacttions.component.scss']
})
export class LastFewTransacttionsComponent implements OnInit {

  transactions = [
    {
      id:1,
      title:"Ryzen 5 Processor",
      price:"$299",
      shop:"Tech Pro",
      location: "East Hartford",
      status: "pending",
      imgSrc: "",
    },
    {
      id:2,
      title: "Denver Blackcode",
      price: "$7.89",
      shop: "Pick the best",
      location: "Miamisburg",
      status: "shipped",
      imgSrc:"",
    },
    
  ];

  constructor() {}

  ngOnInit(): void {

  }

}
