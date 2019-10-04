import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../book'

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  books:Book[] =[];

  constructor(private svc: DataService) { }

  ngOnInit() {
    this.books = this.svc.books;
  }

}
