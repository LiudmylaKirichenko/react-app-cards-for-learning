import Button from "../Button/Button";
import css from "./QuestionCard.module.css";

function QuestionCard() {
  return (
    <div className={css.card}>
      <div className={css.cardLabels}>
        <div>level1</div>
        <div>Not completed</div>
      </div>
      <h5 className={css.cardTitle}>Що таке реакт?</h5>
      <div className={css.cardAnswers}>
        <label htmlFor="">short answer</label>
        <p className={css.cardAnswer}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          itaque.
        </p>
      </div>
      <Button onClick={() => {}}>View</Button>
    </div>
  );
}

export default QuestionCard;
