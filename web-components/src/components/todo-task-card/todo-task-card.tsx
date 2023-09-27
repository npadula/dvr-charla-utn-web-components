import { Component, Host, h, Event, EventEmitter,State } from '@stencil/core';
import { TodoRemovedEvent} from "./todo-removed-event"

@Component({
  tag: 'todo-task-card',
  styleUrl: 'todo-task-card.css',
  shadow: true,
})
export class TodoTaskCard {

    @State() completed: boolean = false;

    @Event({
      eventName: 'todoRemoved',
      composed: true,
      cancelable: true,
      bubbles: true,
    }) todoRemoved: EventEmitter<TodoRemovedEvent>;

  render() {
    return (
      <Host>
        <div class={this.completed ? "task-card completed" : "task-card"}>
          <input type="checkbox" onChange={_ => this.toggleCompleted()} />
          <span class="task-text"><slot></slot></span>
          <button onClick={_ => this.removeTask()} class="remove-btn">x</button>
        </div>
      </Host>
    );
  }

  removeTask(){
    this.todoRemoved.emit()
  }

  toggleCompleted(){
    this.completed = !this.completed
  }

}


