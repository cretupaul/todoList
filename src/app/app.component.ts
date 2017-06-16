import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';

import { TodoValue } from './interfaces';

const existingList = JSON.parse(sessionStorage.getItem('allTodoList'));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Todo';
  allTodoList: Array<TodoValue> = existingList ? existingList : [];
  showTodoList: Array<TodoValue> = this.allTodoList;
  itemsActive: number =  this.getActiveNumber();
  toDoValue: TodoValue = {
    value : '',
    completed: false
  };

  ngOnInit() {
    this.showTodoList = [...this.allTodoList]
  }

  addElement(input: HTMLInputElement): void {
    const currentValue: string = input.value;
    this.setToDoElement(currentValue, true);
    this.insertToDoElement(this.toDoValue);
    this.resetInputValue(input);
    this.itemsActive = this.getActiveNumber();
    this.saveToSession();
  }

  getActiveNumber(): number {
    console.log(this.showTodoList);
    return this.showTodoList.filter(item => !item.completed).length;
  }

  setToDoElement(value: string, isActive: boolean = true): void {
    this.toDoValue.completed = false;
    this.toDoValue.value = value;
  }

  saveToSession() {
     sessionStorage.setItem('allTodoList', JSON.stringify(this.showTodoList));
  }

  insertToDoElement(element: TodoValue): void {
    this.showTodoList.push(Object.assign({}, element));
  }

  resetInputValue(input: HTMLInputElement): void {
    input.value = null;
  }

  clickOnElement (event: Event,  index: number) {
     // this.checkTheInput(index);
  }

  checkTheInput(index: number): void {
    const currentElement = this.showTodoList[index];
    currentElement.completed = !currentElement.completed;
    // this.allTodoList[index] = Object.assign({}, currentElement);
    this.showTodoList[index] = {...currentElement};
    this.itemsActive = this.getActiveNumber();
    this.saveToSession();
  }

  onChecked(index: number) {
    this.checkTheInput(index);
  }
  onUpdate(element) {
    const currentElement = this.showTodoList[element.index];
    currentElement.value = element.value;
    this.showTodoList[element.index] = {...currentElement};
    this.saveToSession();
  }
  removeItem(index: number) {
    this.showTodoList.splice(index, 1);
    this.itemsActive = this.getActiveNumber();
    this.saveToSession();
  }
  completed() {
    this.showTodoList =  this.allTodoList.filter(item => item.completed)
  }

  active() {
    this.showTodoList =  this.allTodoList.filter(item => !item.completed)
  }

  all() {
    this.showTodoList = [...this.allTodoList];
  }
}

