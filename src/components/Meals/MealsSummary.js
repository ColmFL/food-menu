import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>The very best food in town</h2>
      <p>
        Choose your meal from a great selection. Come in and enjoy the meal with a few drinks or order for delivery to enjoy in your home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;