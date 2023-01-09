import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box.styled';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export function App() {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const leaveFeedback = option => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [option]: options[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = options;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (!countTotalFeedback()) {
      return 0;
    }
    return Math.round((options.good / countTotalFeedback()) * 100);
  };

  return (
    <Box>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Box>
  );
}
