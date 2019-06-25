import {Component, Input, OnInit} from '@angular/core';
import Model from '../models/Model';
import PageService from '../services/PageService';

@Component({
  selector: 'app-row-toolbar',
  templateUrl: './row-toolbar.component.html',
  styleUrls: ['./row-toolbar.component.css']
})
export class RowToolbarComponent implements OnInit {
  hideToolbar = true;
  @Input() websiteId;
  @Input() pageId;
  @Input() page;
  @Input() row;

  constructor(private model: Model, private service: PageService) {
  }

  ngOnInit() {
  }

  deleteRow() {
    this.model.deleteRow(this.page, this.row);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

  moveRowUp() {
    this.model.moveRowUp(this.page, this.row);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

  moveRowDown() {
    this.model.moveRowDown(this.page, this.row);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }
}
