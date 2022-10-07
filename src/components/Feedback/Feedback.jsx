import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodClick = () => {
    this.setState(({ good }) => ({
      good: good + 1,
    }));
  };

  handleNeutralClick = () => {
    this.setState(({ neutral }) => ({
      neutral: neutral + 1,
    }));
  };

  handleBadClick = () => {
    this.setState(({ bad }) => ({
      bad: bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;

    if (total !== 0) {
      return Number.parseInt((good / total) * 100);
    }
    return 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <button type="button" onClick={this.handleGoodClick}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutralClick}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBadClick}>
          Bad
        </button>

        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive feedback: {positiveFeedback}%</p>
      </>
    );
  }
}
