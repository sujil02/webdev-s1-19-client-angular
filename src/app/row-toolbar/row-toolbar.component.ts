import {Component, Input, OnInit} from '@angular/core';
import Model from '../models/Model';

@Component({
  selector: 'app-row-toolbar',
  templateUrl: './row-toolbar.component.html',
  styleUrls: ['./row-toolbar.component.css']
})
export class RowToolbarComponent implements OnInit {
  hideToolbar = true;
  @Input() page;
  @Input() row;

  constructor(private model: Model) {
  }

  ngOnInit() {
  }

  deleteRow() {
    this.model.deleteRow(this.page, this.row);
  }

  moveRowUp() {
    this.model.moveRowUp(this.page, this.row);
  }

  moveRowDown() {
    this.model.moveRowDown(this.page, this.row);
  }
}
