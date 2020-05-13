import React from 'react';

const Task = (props) => {
    const priorityStyle = {
        color: "red",
        // textTransform: "uppercase"
    }

    // destructuring props
    const { text, date, id, active, priority, finishDate } = props.task;

    // if(active === true)
    if (active) {
        return (
            <>
                <div className="activeTasks-desktop">
                    <strong style={priority ? priorityStyle : null}>{text} </strong>
                | Deadline: <span> {date} | </span>
                    {/* <br /> */}
                    <button onClick={() => props.change(id)}>Done</button>
                    <button onClick={() => props.delete(id)}>Delete</button>
                </div>

                <div className="activeTasks-tablet">
                    <strong style={priority ? priorityStyle : null}>{text} </strong>
                     | Deadline: <span> {date} </span>
                    <br />
                    <button onClick={() => props.change(id)}>Done</button>
                    <button onClick={() => props.delete(id)}>Delete</button>
                </div>

                <div className="activeTasks-mobile">
                    <strong style={priority ? priorityStyle : null}>{text} </strong>
                    <br />
                    Deadline: <span> {date} </span>
                    <br />
                    <button onClick={() => props.change(id)}>Done</button>
                    <button onClick={() => props.delete(id)}>Delete</button>
                </div>
            </>

        )
    } else {
        // here we convert milliseconds to readable format using toLocaleString() method
        const actualDate = new Date(finishDate).toLocaleString();

        return (
            <>
                <div className="doneTasks-desktop">
                    <p>
                        <b>{text}</b> | Deadline: {date}<br />
                        Completed: <span> {actualDate} </span>
                        <button onClick={() => props.delete(id)}>Delete</button>
                    </p>
                </div>

                <div className="doneTasks-mobile">
                    <p>
                        <b>{text}</b> <br />
                        Deadline: {date} <br />
                        Completed: <span> {actualDate} </span> <br />
                        <button onClick={() => props.delete(id)}>Delete</button>
                    </p>
                </div>

            </>
        )
    }
}

export default Task; 