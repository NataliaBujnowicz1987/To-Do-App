import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    // we collect props from App.js (tasks) and use filter method that allows create new arrays.
    // the active state is set to true by default. here we divided the tasks into 2 groups - still active and done
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    // we sort completed tasks by date of completion (finish Date). First, we compare 2 items from the array and check their finishDate to display the last completed
    done.sort((a, b) => b.finishDate - a.finishDate);

    // here we sort active task - those with the shortest deadline are displayed at the top
    active.sort((a, b) => {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0
    })

    // now we can work on copied arrays. We use the map method here to work with each single element in array
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <>
            <div className="activeTask">
                <h3>To-Do List:</h3>
                {activeTasks.length > 0 ? activeTasks : <p>you don't have any tasks to complete</p>}
            </div>

            <div className="doneTask">
                <h3>Done tasks: ({done.length})</h3>
                {doneTasks}
            </div>
        </>
    )

}

export default TaskList;