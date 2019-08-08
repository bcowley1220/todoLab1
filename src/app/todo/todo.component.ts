import { Component, OnInit } from "@angular/core";
import { Todo } from "../interface/todo";
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [
    { todo: "clean the cat boxes", completed: true },
    { todo: "cook dinner", completed: false },
    { todo: "1mi walk", completed: true },
    { todo: "go to gym", completed: false },
    { todo: "read to Seamus", completed: false }
  ];
  constructor() {}

  // addTask(data: any): void {
  //   this.todoList.push(data.input.value.task);
  //   data.reset();
  // }
  ngOnInit() {}
}
