import css from "./Description.module.css";

export const Description = () => {
  return (
    <div className={css.container}>
      <h1 className={css.header}>
        Sip Happens <span>Café</span>
      </h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
