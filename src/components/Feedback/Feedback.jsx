import css from "./Feedback.module.css";

export const Feedback = ({ reviews, totalFeedback }) => {
  const rating = Math.round(
    ((reviews.good + reviews.neutral) / totalFeedback) * 100
  );

  const whichRatingEmo = (rating) => {
    if (rating >= 90) return " 💎";
    if (rating >= 80) return " 💕";
    if (rating >= 50) return " 🇨🇭";
    if (rating >= 30) return " 🤷‍♀️";
    if (rating < 30) return " 🤦";
  };

  return (
    <div className={css.container}>
      <ul className={css.reactions}>
        {Object.entries(reviews).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <p className={css.total}>Overall Satisfaction: {rating}%</p>
      <span>{whichRatingEmo(rating)}</span>
    </div>
  );
};
