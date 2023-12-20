import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-namesallah',
  templateUrl: './namesallah.component.html',
  styleUrls: ['./namesallah.component.css']
})
export class NamesallahComponent implements OnInit {
data:any
  constructor() { }

  ngOnInit(): void {
    this.getNames()
  }
  
  getNames() {
    fetch('./assets/names_of_allah.json')
      .then(response => response.json())
      .then(res => {
        this.data = res
      })
      .catch(err => console.error(err));
  }


}
