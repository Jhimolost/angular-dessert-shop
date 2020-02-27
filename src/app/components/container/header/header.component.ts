import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../login/login.component';
import { TasksService } from '../../../services/tasks.service';
@Component({ 
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count: number;
  @Input() collapseHeader = false;

  constructor(public dialog: MatDialog, private tasksService: TasksService) { 
  }

  ngOnInit() {
    console.log(this.collapseHeader)
  this.tasksService.count.subscribe( data =>
    this.count = data
  );
  }

  login(){
    console.log(this.collapseHeader)
    this.dialog.open(LoginComponent);
  }
}
