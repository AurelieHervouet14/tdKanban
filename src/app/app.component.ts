import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { KanbanComponent } from 'smart-webcomponents-angular/kanban';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('kanban',
   { read: KanbanComponent, static: false }
   ) 
   kanban!: KanbanComponent;

  createCard: boolean = false;
  updateCard: boolean = false;
  selectedCardId: number = -1;

  createTask: boolean = false;
  updateTask: boolean = false;
  selectedTaskId: number = -1;
 
  cardTitle: any;

  colors = ['#ffbe76', '#ff7979', '#f6e58d', '#f0932b', '#eb4d4b', '#7ed6df', '#e056fd',
          '#22a6b3', '#ffc048', '#30336b', '#f7f1e3', '#95afc0', '#c7ecee', '#30336b', 
          '#26de81', '#20bf6b', '#a55eea', '#45aaf2', '#a5b1c2', '#0fb9b1', '#B33771',
          '#F8EFBA', '#58B19F', '#F97F51', '#B33771', '#FC427B', '#D6A2E8', '#BDC581']

  randomColor(){
    const color = Math.floor(Math.random() * this.colors.length);
    return this.colors[color];
  }

  columns = [
    { "id": "0",
      "title" : "Backlog",
      "color": this.colors,
      "tasks":[
        {"id": "4", "titleTask": "Ajouter task"},
        {"id": "5", "titleTask": "Supprimer task"},
      ]
    },
    { "id": "1",
      "title" : "To-Do",
      "color": this.colors,
      "tasks":[
        {"id": "6", "titleTask": "Mise en forme colonne"},
        {"id": "7", "titleTask": "Mise en forme page"},
      ]
    },
    { "id": "2",
      "title" : "In Progress",
      "color": this.colors,
      "tasks":[
        {"id": "8", "titleTask": "Drag and Drop en colonne"},
        {"id": "9", "titleTask": "Drag and Drop par colonne"},
      ]
    },
    { "id": "3",
      "title" : "Done",
      "color": this.colors,
      "tasks":[
        {"id": "10", "titleTask": "Ajouter column"},
        {"id": "11", "titleTask": "Supprimer column"},
      ]
    },
];

addColumn(title: string = 'test'){

  if(title != ' ' && title){
    let id: any;

    this.columns.push({"id":id, "title":title, "color": this.colors, "tasks":[]});

    try{
      id = this.columns[this.columns.length - 1].id + 1;
    }catch{
    }

    console.log(this.columns);
  }
}

deleteColumn(columnId: any){
  const columnIndex = this.columns.findIndex((columns: { id: any }) => columns.id == columnId);

  this.columns.splice(columnIndex, 1);
}

addTask(columnId: any, event: any){
  if(event.target.value){
    const column: any = this.columns.find(columns => columns.id == columnId);
    const titleTask = event.target.value;

    let contentId: any;

    // try{
    //   contentId = this.columns.tasks[this.columns.tasks.length - 1].id + 1;
    // }catch{
    // }

    column.tasks.push({"id":contentId, "titleTask":titleTask});
    console.log(contentId);
  }
  this.createTask = false;
}

deleteTask(columnId: any, taskId: any){
  const column: any = this.columns.find(columns => columns.id == columnId);

  const taskIndex = column.tasks.findIndex((task: { id: any; }) => task.id == taskId);

  column.tasks.splice(taskIndex, 1);
}

todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

drop(event: CdkDragDrop<any[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }
}
}
