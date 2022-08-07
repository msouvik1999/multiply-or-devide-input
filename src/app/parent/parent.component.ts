import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  inputNumber:number =0;
  showData:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  childData(data:number){
    // console.log("parent",data)
    this.showData=data;
  }
 

}
