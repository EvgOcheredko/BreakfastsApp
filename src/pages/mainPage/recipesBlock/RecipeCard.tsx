import * as React from 'react';
import classNames from './recipeCard.module.css';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <div className={classNames.recipeCard}>
      <h2 className={classNames.recipeCardTitle}>{recipe.title}</h2>
      <p className={classNames.description}>{recipe.description}</p>
      <img
        className={classNames.recipePhoto}
        src={recipe.imageUrl}
        alt={recipe.title}
      />
      <button className={classNames.seeRecipe}>See recipe</button>
    </div>
  );
};

export default RecipeCard;
