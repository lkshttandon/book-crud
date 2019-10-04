import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Comments } from '../comments'

@Component({
  selector: 'app-viewcomm',
  templateUrl: './viewcomm.component.html',
  styleUrls: ['./viewcomm.component.css']
})
export class ViewcommComponent implements OnInit {

  comm:Comments[] =[];

  constructor(private svc:DataService) { }

  ngOnInit() {
    
  }

}
