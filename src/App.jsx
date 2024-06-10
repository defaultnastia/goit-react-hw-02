import { Description, Options, Feedback, Notification } from "components";
import { Background } from "./components/Background/Background";
import { useState } from "react";

const defaultReactions = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [reviews, setReviews] = useState(defaultReactions);

  const updateFeedback = (feedbackType) => {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    });
  };

  const resetFeedback = () => setReviews(defaultReactions);

  const totalFeedback = Object.values(reviews).reduce(
    (acc, value) => acc + value,
    0
  );

  return (
    <>
      <Background />
      <Description />
      <Options
        reviews={reviews}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback reviews={reviews} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
