import { Recipe } from '../interfaces/recipes';

// to be json or some sort of persisting data source
export const recipeData: Recipe[] = [
  {
    name: 'Chicken Korma',
    cuisine: 'Indian',
    ingredients: ['Chicken', 'Coconut Milk'],
    servings: 1,
  },
  {
    name: 'Tomato Pizza',
    cuisine: 'Italian',
    ingredients: ['Pizza base', 'Tomato Sauce'],
    servings: 1,
  },
  {
    name: 'Fried Rice',
    cuisine: 'Chinese',
    ingredients: ['Rice', 'Egg', 'Soy Sauce', 'Garlic', 'Courgettes'],
    servings: 1,
  },
  {
    name: 'Chill con Carne',
    cuisine: 'Mexican',
    ingredients: ['Beef Mince', 'Spice Mix', 'Bell Peppers', 'Peas'],
    servings: 3,
  },
  {
    name: 'Lamb Kofte',
    cuisine: 'Greek',
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
