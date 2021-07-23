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
];
