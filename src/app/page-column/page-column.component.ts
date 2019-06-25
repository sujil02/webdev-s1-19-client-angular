import {Component, Input, OnInit} from '@angular/core';
import PageService from '../services/PageService';

@Component({
  selector: 'app-page-column',
  templateUrl: './page-column.component.html',
  styleUrls: ['./page-column.component.css']
})
export class PageColumnComponent implements OnInit {

  @Input() website;
  @Input() row;
  @Input() column;
  @Input() widgets;
  @Input() page;
  @Input() pageId;
  @Input() websiteId;

  constructor(private service: PageService) {
  }

  ngOnInit() {
  }

  addWidget = () => {
    const widget = {
      id: '1',
      title: 'This is New Widget',
      size: '3',
      type: 'HEADING',
      text: 'Heading Widget'
    };
    this.column.widgets.push(widget);
    this.service.updatePage(this.websiteId, this.pageId, this.page);
  }

}
