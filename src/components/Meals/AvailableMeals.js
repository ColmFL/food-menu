import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: '10 Oz Sirloin Steak',
      description: 'Served with fresh vegetables, Peppercorn sauce, and a choice of mash or chips.',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Beef and Guinness Stew',
      description: 'Traditional stew cooked with fresh vegetables and Guinness stout.',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Colms Beef Burger',
      description: 'Cooked with 100% Irish Beef. Served with fried onion, cheese, relish, and a side of chips or mash.',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Fish Pie',
      description: 'Delicious Fish Pie cooked with Haddock and served with fresh vegetables and onion rings.',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => 
    <MealItem 
    key={meal.id} 
    id={meal.id}
    name={meal.name} 
    description={meal.description} 
    price={meal.price} />);
    
    
    return (
    <section className= {classes.meals}>
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
      
    </section>
    );
};

export default AvailableMeals;