import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
  // @ts-ignore
  @Input() text: string;
  // @ts-ignore
  @Input() color: string;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    console.log('Add from button component');
    this.btnClick.emit();
  }
}
