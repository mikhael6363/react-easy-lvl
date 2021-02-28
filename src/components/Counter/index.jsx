import React, { Component } from 'react';
import styles from './Counter.module.scss';
import { CounterSettings } from './CounterSettings';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 1,
      isSwitched: true,
      isRunning: false,
    };
  }
  tick = () => {
    const { count, step, isSwitched } = this.state;
    this.setState((state) => {
      if (isSwitched) {
        return { count: JSON.parse(JSON.stringify(count)) + step };
      }
      return { count: JSON.parse(JSON.stringify(count)) - step };
    });
  };

  start = () => this.setState({ isRunning: true });
  stop = () => this.setState({ isRunning: false });

  componentDidMount() {
    this.start();
  }

  counterSetStep = (value) =>
    this.setState({
      step: Number(value),
    });

  componentDidUpdate() {
    const { isRunning } = this.state;
    if (isRunning) {
      this.timeOutID = setTimeout(this.tick, 1000);
    }
  }

  increment = () =>
    this.setState({
      count: JSON.parse(JSON.stringify(this.state.count)) + this.state.step,
    });

  decrement = () =>
    this.setState({
      count: JSON.parse(JSON.stringify(this.state.count)) - this.state.step,
    });

  switchHandler = () => this.setState({ isSwitched: !this.state.isSwitched });

  render() {
    const { count, isSwitched, isRunning } = this.state;
    return (
      <>
        <div className={styles.counterWrapper}>
          <h3 className={styles.counterHeading}>{count}</h3>
          <button
            className={`${styles.btn} ${styles.switchBtn} ${styles.setBtns}`}
            onClick={this.switchHandler}
            title='Switch'
          >
            <i className='fas fa-exchange-alt'></i>
          </button>
          <div className={styles.btnsWrapper}>
            {isSwitched ? (
              <button
                className={`${styles.btn} ${styles.increaseBtn}`}
                onClick={this.increment}
                title='Increment'
              >
                <i className='fas fa-plus'></i>
              </button>
            ) : (
              <button
                className={`${styles.btn} ${styles.decreaseBtn}`}
                onClick={this.decrement}
                title='Decrement'
              >
                <i className='fas fa-minus'></i>
              </button>
            )}
          </div>

          <CounterSettings
            step={this.state.step}
            counterSetStep={this.counterSetStep}
            isRunning={isRunning}
            start={this.start}
            stop={this.stop}
          />
        </div>
      </>
    );
  }
}
