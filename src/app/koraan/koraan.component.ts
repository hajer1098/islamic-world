import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-koraan',
  templateUrl: './koraan.component.html',
  styleUrls: ['./koraan.component.css']
})
export class KoraanComponent implements OnInit {

  data:any;
  constructor() { }

  ngOnInit(): void {
    this.getKoraan()
  }

  getKoraan(){

    fetch('https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/showall/ar/showall/1/25/json')
    .then(response => response.json())
    .then(res => {this.data=res.data
    })
    .catch(err => console.error(err));



  }

}
