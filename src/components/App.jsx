import { Component } from 'react';
// import { Feedback } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Container } from './Container/Container';
import { FeedbackOptions } from './FeedbackOptions/FeedbcakOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setButtonLabel = e => {
    const label = e.target.innerHTML;

    this.setState(prevState => ({
      [label]: prevState[label] + 1,
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
      <Container>
        {/*  */}
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.setButtonLabel}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
