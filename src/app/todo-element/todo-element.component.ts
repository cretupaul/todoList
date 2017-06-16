import { Component, EventEmitter, OnInit, Input, Inject, Output } from '@angular/core';
import {MdCheckboxModule} from '@angular/material';
import {AppComponent} from '../app.component';
import { TodoValue } from './../interfaces';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.css']
})
export class TodoElementComponent implements OnInit {
  @Input() element: TodoValue;
  @Input() index: number;
  @Output() onCheck = new EventEmitter<number>();
  @Output() onUpdate = new EventEmitter();
  itemEditing: boolean;
  constructor() { }

  clickOnCheckox(index: number): void {
    this.onCheck.emit(index);
  }

  editItem(): void {
    this.itemEditing = true;
  }

  doneEditing(element: TodoValue, index: number): void {
    this.onUpdate.emit({index: index, value: element.value});
    this.itemEditing = false;
  }

  ngOnInit() {
    this.itemEditing = false;
  }
}
