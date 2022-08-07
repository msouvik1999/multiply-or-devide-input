import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() inputNumber = 0;
  result: number = 0;
  @Output() childData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: any) {
      const prev= changes.inputNumber.previousValue;
      const cur = changes.inputNumber.currentValue;

    if (prev !== cur) {
      if (this.inputNumber < 0) {
        this.result = this.inputNumber / 10;
      } else {
        this.result = this.inputNumber * 10;
      }
      this.childData.emit(this.result)
    }
  }

}
