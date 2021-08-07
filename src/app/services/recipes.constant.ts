import { Recipe } from '../interfaces/recipes';

// to be json or some sort of persisting data source
export const recipeData: Recipe[] = [
  {
    name: 'Chicken Korma',
    ingredients: ['Chicken', 'Coconut Milk'],
    servings: 1,
  },
  {
    name: 'Tomato Pizza',
    ingredients: ['Pizza base', 'Tomato Sauce'],
    servings: 1,
  },
  {
    name: 'Fried Rice',
    ingredients: ['Rice', 'Egg', 'Soy Sauce', 'Garlic', 'Courgettes'],
    servings: 1,
  },
  {
    name: 'Chill con Carne',
    ingredients: ['Beef Mince', 'Spice Mix', 'Bell Peppers', 'Peas'],
    servings: 3,
  },
  {
    name: 'Lamb Kofte',
    ingredients: [
      'Ground Lamb',
      'Mint',
      'Cucumber',
      'Tomatoes',
      'Hummus',
      'Pitta',
    ],
    servings: 3,
  },
];
