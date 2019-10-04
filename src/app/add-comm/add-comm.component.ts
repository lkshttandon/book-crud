import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Comments } from '../comments'

@Component({
  selector: 'app-add-comm',
  templateUrl: './add-comm.component.html',
  styleUrls: ['./add-comm.component.css']
})
export class AddCommComponent implements OnInit {

  commarray:Comments[] = [];
  pname:string;
  comment:string;

  newcomm: Comments;
  constructor(private svc:DataService) { }

  ngOnInit() {
  }

  createcomm(){
    this.newcomm = new Comments(this.pname,this.comment);
    console.log(this.newcomm);
    this.svc.comment(this.newcomm);
    this.svc.objarr();
    this.reset();
    
  }
  reset(){
    this.pname ="";
    this.comment = "";
  }
}
