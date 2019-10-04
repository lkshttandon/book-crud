import { Injectable } from '@angular/core';
import { Book } from './book';
import { Comments } from './comments';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    books:Book[] =[];
    comment1:Comments[] = [];
    id: number = 1;
    newcomm: Comments;
  constructor() { }

  objarr(){
    this.comment1.push(this.newcomm);
    console.log(this.comment1);
  }

  comment(c:Comments){
    this.comment1.push(c);
  }
  create(b:Book){
    b.id = this.id;
    ++this.id;
    this.books.push(b);
  }
}
