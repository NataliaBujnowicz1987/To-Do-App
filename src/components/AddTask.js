import React, { Component } from 'react';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0, 10);

    state = {
        text: '',
        checked: false,
        date: this.minDate
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleChecked = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleClick = () => {
        const { text, date, checked } = this.state;

        if (text.length > 2) {
            // here we use props added in app.js (addTask method)
            const add = this.props.add(text, date, checked)
            // if addTask method return true change state
            if (add) {
                this.setState({
                    text: '',
                    checked: false,
                    date: this.minDate
                })
            }
        } else {
            alert('Sorry, this text is too short')
        }
    }

    render() {

        // here we set maxDate - to the actual date (here minDate) we use slice method to get only 4 first numbers (year), we multiply it by 1 to change string to number and finally we add 2
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;

        maxDate = maxDate + "-12-31";
        // result example: 2022-12-31

        return (
            <div className="addTask">
                <h2>Add your task:</h2>
                <input type="text" placeholder="Add a new task" value={this.state.text} onChange={this.handleText} />

                <label htmlFor="priority" style={{ color: "red" }}> Priority </label>
                <input type="checkbox" checked={this.state.checked} id="priority" onChange={this.handleChecked} />
                <br />

                <label htmlFor="date">When is deadline? </label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
                <br />
                <br />
                <button onClick={this.handleClick}>Add a new task</button>
            </div>
        );
    }
}

export default AddTask;

