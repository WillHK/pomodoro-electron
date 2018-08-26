import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const workTime = 1200;
const breakTime = 300;

const Timer = ({ timerActive, stopTimer, startTimer }) => {
  if(timerActive) {
    return(<div>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>);
  } else {
    return(
      <div>
        <button onClick={startTimer}>Start Timer</button>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      timeLeft: workTime,
      timerActive: false,
      timer: null,
    }
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    console.log('start');
    this.setState(() => {
      return { timerActive: true };
    });
    const timer = setInterval(() => {
      this.setState(() => {
        return { timeLeft: this.state.timeLeft - 1 };
      });
    }, 1000);
    this.setState(() => {
      return { timer: this.state.timer };
    });
  }

  stopTimer() {
    console.log('stop');
    clearInterval(this.state.timer);
    this.setState(() => {
      return { timerActive: false };
    });
  }

  StartStopTimer() {

  }

  resetTimer() {
    this.setState(() => {
      return { timeLeft: workTime };
    });
  }

  render() {
    return (
      <div className="App">
        <h3>Clock</h3>
        <h6>{this.state.timeLeft}</h6>
        <Timer timerActive={this.state.timerActive} stopTimer={this.stopTimer} startTimer={this.startTimer}/>
        <button onClick={this.resetTimer}>Reset Timer</button>
      </div>
    );
  }
}

export default App;
