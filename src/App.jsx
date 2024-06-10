import { Description, Options, Feedback, Notification } from "components";
import { Background } from "./components/Background/Background";
import { useEffect, useState } from "react";

const defaultReactions = {
  good: 0,
  neutral: 0,
  bad: 0,
};

// <== YOU CAN TEST (reset reviews/storage first) ==>
// Add one more reaction to "defaultReactions" to test scalability, though the satisfaction calculation is still too poor: (

// const defaultReactions = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
//   awful: 0,
// };

const App = () => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem("reviews");
    if (savedReviews) return JSON.parse(savedReviews);

    return defaultReactions;
  });

  useEffect(() => {
    window.localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

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
