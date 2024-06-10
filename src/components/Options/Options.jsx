import css from "./Options.module.css";

export const Options = ({
  reviews,
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) => {
  return (
    <div className={css.container}>
      <ul className={css.reactions}>
        {Object.keys(reviews).map((key) => {
          return (
            <li key={key}>
              <button onClick={() => updateFeedback(key)}>{key}</button>
            </li>
          );
        })}
      </ul>
      {totalFeedback !== 0 && (
        <button className={css.reset} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};
