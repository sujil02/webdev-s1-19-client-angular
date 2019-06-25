import {Component, Input, OnInit} from '@angular/core';
import Model from '../models/Model';
import PageService from '../services/PageService';

@Component({
  selector: 'app-column-toolbar',
  templateUrl: './column-toolbar.component.html',
  styleUrls: ['./column-toolbar.component.css']
})
export class ColumnToolbarComponent implements OnInit {

  hideToolbar = true;

  @Input() websiteId;
  @Input() pageId;
  @Input() page;
  @Input() row;
  @Input() column;

  constructor(private model: Model, private service: PageService) {
  }

  ngOnInit() {
  }

  addColumn() {
    this.model.insertColumnAfter(this.row, this.column);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

  deleteColumn() {
    this.model.deleteColumn(this.row, this.column);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

  spanColumnUp() {
    this.model.spanColumnUp(this.row, this.column);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

  spanColumnDown() {
    this.model.spanColumnDown(this.row, this.column);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

  moveColumnLeft() {
    this.model.moveColumnLeft(this.row, this.column);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

  moveColumnRight() {
    this.model.moveColumnRight(this.row, this.column);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

  moveColumnUp() {
    this.model.moveColumnUp(this.row, this.column);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

  moveColumnDown() {
    this.model.moveColumnDown(this.row, this.column);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

}
