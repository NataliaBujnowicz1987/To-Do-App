import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {

  // we set the number of current elements in the array to create the property id for the next object
  counter = 3;

  state = {
    tasks: [
      {
        id: 0,
        text: 'learn react native',
        date: '2020-05-30',
        priority: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'create portfolio webpage',
        date: '2020-06-30',
        priority: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'visit Zermatt',
        date: '2020-09-30',
        priority: false,
        active: true,
        finishDate: null
      },
    ]
  }


  deleteTask = (id) => {
    // we create a copy of array to work on it
    const tasks = [...this.state.tasks];

    // using the findIndex method we check the index of the element
    const index = tasks.findIndex(task => task.id === id);

    // and we remove it from array
    tasks.splice(index, 1);
    this.setState({
      tasks
    })

    // or we can do the same using filter method:
    //    let tasks = [...this.state.tasks];
    //    tasks = tasks.filter(task => task.id !== id);

    //    this.setState({
    //      tasks: tasks
    //    })

    // console.log("the task has been deleted");
  }

  changeStatus = (id) => {
    // we create a copy of array by using Array.from method
    const newTasks = Array.from(this.state.tasks);
    // forEach allow us work on each element in the array
    newTasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks: newTasks
    })

    // console.log("status has been changed");
  }

  // method allows add a new task to the array
  addTask = (text, date, priority) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      priority: priority,
      active: true,
      finishDate: null
    }
    // here we add +1 to next id number
    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render() {
    return (
      <div className="App">
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeStatus} />
      </div>
    );
  }
}

export default App;
