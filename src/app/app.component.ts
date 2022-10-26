import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { KanbanComponent } from 'smart-webcomponents-angular/kanban';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,  OnInit{
  @ViewChild('kanban',
   { read: KanbanComponent, static: false }
   ) 
   kanban!: KanbanComponent;

  addNewColumn = true;

  columns = [
    { addNewButton: false }
];

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
  }

  init(): void {
    // init code.
  }
}
